---
sidebar_position: 11
---

## AutoInjectToggle
The `AutoInjectToggle` function toggles the auto-inject feature. It displays a warning message advising against using this function if Roblox takes a long time to load or if you are joining an empty server.

### Returns

- `bool`: The current status of the auto-inject feature after toggling.

### Example

```csharp
bool isAutoInjectEnabled = AutoInjectToggle();
Console.WriteLine("Auto-inject is now " + (isAutoInjectEnabled ? "enabled" : "disabled"));
```

### Remarks

- Ensure that you understand the warning message before using this function.
- The function uses asynchronous tasks to handle the auto-inject process.
```