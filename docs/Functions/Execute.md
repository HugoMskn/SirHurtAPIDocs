---
sidebar_position: 12
---

## Execute

Sends a script to the execution queue

### Syntax
```csharp
public static bool Execute(string script, bool Forced)
```

### Parameters

- `script` (string): The script to be executed
- `Forced` (bool): Force the cleaning of the execution queue after injection

### Example

```csharp
SirHurtAPI.SirHurtAPI.Execute("print('Hello World !')",false);
```

### Returns

- `bool`: Returns `true` if execution was successfull otherwise `false`.

