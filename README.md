# [ActionTitler](https://github.com/arutaka1220/ActionTitler/releases/download/v1.0.0/ActionTitler.js)
actionbarに出す文字を増やせます！  
[ダウンロード](https://github.com/arutaka1220/ActionTitler/releases/download/v1.0.0/ActionTitler.js)
## 例コード
破壊,設置ブロックのidをactionbarに3秒表示する例
```js
import { world } from "@minecraft/server";
import { ActionTitler } from "./ActionTitler.js";

world.events.blockBreak.subscribe(ev => {
  ActionTitler.setMessage(ev.player, undefined, `Destroy: ${ev.brokenBlockPermutation.type.id}`, 60);
});

world.events.blockPlace.subscribe(ev => {
  ActionTitler.setMessage(ev.player, undefined, `Place: ${ev.block.typeId}`, 60);
});
```

## プロパティ
メッセージ追加 ( 返ってくる値: `string` ) 
```js
ActionTitler.setMessage(server.Player, key: ?string, message: string, ?showTick: number);
```
メッセージ削除 ( 返ってくる値: `void` )
```js
ActionTitler.deleteMessage(server.Player, key: string);
```
全メッセージ削除 ( 返ってくる値: `void` )
```js
ActionTitler.deleteAll(server.Player);
```
メッセージの全key( 返ってくる値: `string[]` | `null` )
```js
ActionTitler.getShowKeys(server.Player);
```

...追記  
深夜でクソコードだけど許してちょ！
