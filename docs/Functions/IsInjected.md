---
sidebar_position: 10
---

## IsInjected

Gets the injected status from the registry and returns it.

### Syntax
```csharp
public static bool IsInjected()
```

### Returns

- `bool`: The injected status.


### Example

```csharp
bool injection = SirHurtAPI.SirHurtAPI.IsInjected();
Console.WriteLine("Injection Status: " + injection);
```
