---
sidebar_position: 4
---

## GetAutoInject
This function retrieves the auto-execute status from the Windows registry.

### Syntax

```csharp
public static bool GetAutoExecute()
```

### Returns

- `bool`: The auto-execute status.

### Example

```csharp
bool autoExecuteStatus = SirHurtAPI.SirHurtAPI.GetAutoExecute();
Console.WriteLine("Auto Execute Status: " + autoExecuteStatus);
```

### Remarks

This function attempts to read the `AutoEX` value from the `SirHurtAPI` registry key under `HKEY_CURRENT_USER`. If the value cannot be read, it defaults to `false` and logs the error.

### Exceptions

- `Exception`: If there is an issue accessing the registry or converting the value, the exception is caught, logged, and the auto-execute status is set to `false`.