# Информация разработчику

При верстке использовался http://getbootstrap.com/ v3

## Главня страница / index.html

### Блок `id="malls"`

Используется стандартный компонент http://getbootstrap.com/javascript/#tabs

Разделен по городам.

```
<div class="tab-pane active" id="city-{city slug}">
  ...
</div>
```

Табы хранятся в `class="malls-switch"`. Если город неактивен - к ссылке добавляется класс `disabled` и `tab-pane` не выводится.

Блок ТЦ

```
<a class="mall mall-{mall slug}" href="#" style="background-image: url('img/{mall slug}.logo.png')" data-lat="{lat}" data-lng="{lng}">
  <div class="info">
    <div class="address">{address}</div>
  </div>
</a>
```

Если у бутика стоит статус скоро - `class="mall mall-{mall slug} mall-status-soon"`.
Если у бутика стоит статус неактивен - `class="mall mall-{mall slug} mall-status-disabled"`.

Если нет лого - url('') и вставляется название тц.

```
<a ...>
  <h3>{mall name}</h3>
  <div class="info">
    ...
  </div>
</a>
```

## Страница магазина / mall-zamok.html, mall-nemiga_3.html

### Блок `class="mall-info ..."`

```
<div class="mall-info mall-info-{city slug}-{mall slug}">
  ...
</div>
```

Остальное по аналогии.
