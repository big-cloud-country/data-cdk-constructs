# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyConstruct <a name="MyConstruct" id="data-cdk-constructs.MyConstruct"></a>

#### Initializers <a name="Initializers" id="data-cdk-constructs.MyConstruct.Initializer"></a>

```typescript
import { MyConstruct } from 'data-cdk-constructs'

new MyConstruct(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#data-cdk-constructs.MyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#data-cdk-constructs.MyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="data-cdk-constructs.MyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="data-cdk-constructs.MyConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#data-cdk-constructs.MyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="data-cdk-constructs.MyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#data-cdk-constructs.MyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="data-cdk-constructs.MyConstruct.isConstruct"></a>

```typescript
import { MyConstruct } from 'data-cdk-constructs'

MyConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="data-cdk-constructs.MyConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#data-cdk-constructs.MyConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="data-cdk-constructs.MyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### NotifyingBucket <a name="NotifyingBucket" id="data-cdk-constructs.NotifyingBucket"></a>

#### Initializers <a name="Initializers" id="data-cdk-constructs.NotifyingBucket.Initializer"></a>

```typescript
import { NotifyingBucket } from 'data-cdk-constructs'

new NotifyingBucket(scope: Construct, id: string, props?: NotifyingBucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#data-cdk-constructs.NotifyingBucket.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#data-cdk-constructs.NotifyingBucket.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#data-cdk-constructs.NotifyingBucket.Initializer.parameter.props">props</a></code> | <code><a href="#data-cdk-constructs.NotifyingBucketProps">NotifyingBucketProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="data-cdk-constructs.NotifyingBucket.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="data-cdk-constructs.NotifyingBucket.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Optional</sup> <a name="props" id="data-cdk-constructs.NotifyingBucket.Initializer.parameter.props"></a>

- *Type:* <a href="#data-cdk-constructs.NotifyingBucketProps">NotifyingBucketProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#data-cdk-constructs.NotifyingBucket.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="data-cdk-constructs.NotifyingBucket.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#data-cdk-constructs.NotifyingBucket.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="data-cdk-constructs.NotifyingBucket.isConstruct"></a>

```typescript
import { NotifyingBucket } from 'data-cdk-constructs'

NotifyingBucket.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="data-cdk-constructs.NotifyingBucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#data-cdk-constructs.NotifyingBucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="data-cdk-constructs.NotifyingBucket.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### NotifyingBucketProps <a name="NotifyingBucketProps" id="data-cdk-constructs.NotifyingBucketProps"></a>

#### Initializer <a name="Initializer" id="data-cdk-constructs.NotifyingBucketProps.Initializer"></a>

```typescript
import { NotifyingBucketProps } from 'data-cdk-constructs'

const notifyingBucketProps: NotifyingBucketProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#data-cdk-constructs.NotifyingBucketProps.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="data-cdk-constructs.NotifyingBucketProps.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---



