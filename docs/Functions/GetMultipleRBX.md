---
sidebar_position: 5
---

## GetAutoInject
This function retrieves the multiples roblox status from the Windows registry.

### Syntax

```csharp
public static bool GetMultipleRBX()
```

### Returns

- `bool`: The multi-client status.

### Example

```csharp
bool multiRBXStatus = SirHurtAPI.SirHurtAPI.GetMultipleRBX();
Console.WriteLine("Auto Execute Status: " + multiRBXStatus);
```

### Remarks

This function attempts to read the `mRBX` value from the `SirHurtAPI` registry key under `HKEY_CURRENT_USER`. If the value cannot be read, it defaults to `false` and logs the error.

### Exceptions

- `Exception`: If there is an issue accessing the registry or converting the value, the exception is caught, logged, and the auto-execute status is set to `false`.