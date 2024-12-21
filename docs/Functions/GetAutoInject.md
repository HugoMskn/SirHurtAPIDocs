---
sidebar_position: 3
---

## GetAutoInject
This function retrieves the auto-inject status from the Windows registry.

### Syntax

```csharp
public static bool GetAutoInject()
```

### Returns

- `bool`: The auto-inject status.

### Example

```csharp
bool autoInjectStatus = SirHurtAPI.SirHurtAPI.GetAutoInject();
Console.WriteLine("Auto Inject Status: " + autoInjectStatus);
```

### Remarks

This function attempts to read the `AutoIJ` value from the `SirHurtAPI` registry key under `HKEY_CURRENT_USER`. If the value cannot be read, it defaults to `false` and logs the error.

### Exceptions

- `Exception`: If there is an issue accessing the registry or converting the value, the exception is caught, logged, and the auto-inject status is set to `false`.