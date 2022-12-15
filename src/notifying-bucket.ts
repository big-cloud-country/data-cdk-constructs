import {
    aws_s3_notifications as s3notify,
    aws_sns as sns,
    aws_s3 as s3,
    aws_lambda as lambda,
    Duration
} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {Code, Runtime} from "aws-cdk-lib/aws-lambda";

export interface NotifyingBucketProps {
    readonly prefix?: string;
}

export class NotifyingBucket extends Construct {
    constructor(scope: Construct, id: string, props: NotifyingBucketProps = {}) {
        super(scope, id);
        const bucket = new s3.Bucket(this, 'bucket');
        const topic = new sns.Topic(this, 'topic');
        bucket.addObjectCreatedNotification(new s3notify.SnsDestination(topic),
            {prefix: props.prefix});
    }
}


export class MyConstruct extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);
        new s3.Bucket(this, 'ABucket');

        new lambda.Function(this, 'SampleFunction', {
            runtime: Runtime.NODEJS_12_X,
            code: Code.fromInline('exports.handler = function (e, ctx, cb) { console.log("Event: ", e); cb(); };'),
            handler: 'index.handler',
            timeout: Duration.seconds(10),
        });
    }
}
