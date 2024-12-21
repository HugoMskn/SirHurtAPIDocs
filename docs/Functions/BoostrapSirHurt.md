---
sidebar_position: 1
---

## BoostrapSirHurt
The `BoostrapSirHurt` function is responsible for downloading all required files to run SirHurt


### Syntax

```csharp 
public static bool BoostrapSirHurt()
```

### Returns

- `bool`: Returns `true` if boostrap was successfull otherwise `false`.


### Example

```csharp
if (!SirHurtAPI.SirHurtAPI.BoostrapSirHurt())
{
    MessageBox.Show("Failed to boostrap SirHurt API");
    Environment.Exit(0);
}
```

### Remarks

The function will print in the console if anything goes wrong