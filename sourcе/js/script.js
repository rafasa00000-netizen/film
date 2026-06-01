const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
document.body.classList.toggle("dark-theme");

```
if(document.body.classList.contains("dark-theme")){
    btn.textContent = "☀ Светлая тема";
} else {
    btn.textContent = "🌙 Темная тема";
}
```

});
