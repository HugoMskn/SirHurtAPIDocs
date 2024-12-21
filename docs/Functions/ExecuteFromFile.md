---
sidebar_position: 14
---

## ExecuteFromFile

Open a file selection dialog and send the content of the selected file to the script execution queue

### Syntax
```csharp
 public static bool ExecuteFromFile(bool Forced)
```

### Parameters
- `Forced` (bool): Force the cleaning of the execution queue after injection

### Example

```csharp
SirHurtAPI.SirHurtAPI.ExecuteFromFile(false);
```

### Returns

- `bool`: Returns `true` if execution was successfull otherwise `false`.

