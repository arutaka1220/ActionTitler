import { Player, world } from "@minecraft/server";

export const ActionTitler = {

    /**
     * 
     * @param { Player } player 
     * @param { string } key 
     * @param { string } message 
     * @param { number } showTick 
     * @returns { string } key
     */
    "setMessage": (player, key = "auto", message, showTick = 20) => {
        if(!player.actionTitler) player.actionTitler = new Map();

        if(key === "auto") key = String(player.actionTitler.size + 1);

        player.actionTitler.set(key, {"message": message, "showTick": showTick});
        return key;
    },

    /**
     * 
     * @param { Player } player 
     * @param { string } key 
     * @param { string } message 
     * @param { number } showTick 
     * @returns { void }
     */
    "deleteMessage": (player, key) => {
        if(player.actionTitler.has(key)) player.actionTitler.delete(key);
    },

    /**
     * 
     * @param { Player } player 
     * @returns { void }
     */
    "deleteAll": (player) => {
        if(player.actionTitler) player.actionTitler.clear();
    },

    /**
     * 
     * @param { Player } player 
     * @returns { string[] | null } 
     */
    "getShowKeys": (player) => {
        if(player.actionTitler) return [...player.actionTitler.keys()];
        else return null;
    }
}

world.events.tick.subscribe(ev => {
    for(const player of world.getPlayers()) {
        if(!player.actionTitler) continue;

        let output = [];
        
        player.actionTitler.forEach((/** @type { object } */data, key) => {
            output.push(data.message);
            data.showTick--;
            
            if(data.showTick !== -1 && data.showTick <= 0) player.actionTitler.delete(key);
            else if(data.showTick === -1 && data.showTick > 0) player.actionTitler.set(key, data);
            
        });

        player.onScreenDisplay.setActionBar(output.join("\n"));
    }
});