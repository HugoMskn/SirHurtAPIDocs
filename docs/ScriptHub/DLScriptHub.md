---
sidebar_position: 1
---

# DLScriptHub

The DLScriptHub function will fetch the script from SirHurt script hub and return them as a json array

Usage : 

```c# "
var array = Scripts.DLScriptHub();
foreach (string script in array)
{
    listBox1.Items.Add(script);
}
```
