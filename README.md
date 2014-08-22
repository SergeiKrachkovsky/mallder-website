# Информация разработчику

При верстке использовался http://getbootstrap.com/ v3

## index.html

### Блок `id="malls"`

Используется стандатрный компонент http://getbootstrap.com/javascript/#tabs

```
<a class="mall mall-{slug}" href="#" style="background-image: url('img/{slug}.logo.png')" data-lat="{lat}" data-lng="{lng}">
  <div class="info">
    <div class="address">{address}</div>
  </div>
</a>
```

Если нет лого - url('') и вставляется название тц.

```
<a ...>
  <h3>{mall name}</h3>
  <div class="info">
    ...
  </div>
</a>
```

