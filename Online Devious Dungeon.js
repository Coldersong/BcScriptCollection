 KinkyDungeonAddRestraint = function(restraint, Tightness, Bypass, Lock, Keep, Link, SwitchItems, events) {
    let start = performance.now();
    let tight = (Tightness) ? Tightness : 0;
    let AssetGroup = restraint.AssetGroup ? restraint.AssetGroup : restraint.Group;
    if (restraint) {
        if (!InventoryGroupIsBlockedForCharacter(KinkyDungeonPlayer, restraint.Group) || Bypass) {
            KinkyDungeonEvasionPityModifier = 0;
            let r = KinkyDungeonGetRestraintItem(restraint.Group);
            let linkable = (!Link && r && KinkyDungeonIsLinkable(KDRestraint(r), restraint));
            let linked = false;
            if (linkable) {
                linked = true;
                KinkyDungeonCancelFlag = KinkyDungeonLinkItem(restraint, r, Tightness, Lock, Keep);
            }
 
            // Some confusing stuff here to prevent recursion. If Link = true this means we are in the middle of linking, we dont want to do that
            if (!KinkyDungeonCancelFlag) {
                KinkyDungeonRemoveRestraint(restraint.Group, Keep, Link);
 
                r = KinkyDungeonGetRestraintItem(restraint.Group);
                KinkyDungeonCancelFlag = r != undefined;
            }
 
            // If we did not link an item (or unlink one) then we proceed as normal
            if (!KinkyDungeonCancelFlag) {
                KinkyDungeonRemoveRestraint(restraint.Group, Keep, false);
                if (restraint.remove)
                    for (let remove of restraint.remove) {
                        InventoryRemove(KinkyDungeonPlayer, remove);
                    }
                InventoryWear(KinkyDungeonPlayer, restraint.Asset, AssetGroup, restraint.Color, 10);
                KinkyDungeonSendFloater({x: 1100, y: 600 - KDRecentRepIndex * 40}, `+${TextGet("Restraint" + restraint.name)}!`, "pink", 5, true);
                KDRecentRepIndex += 1;
                let placed = InventoryGet(KinkyDungeonPlayer, AssetGroup);
                let placedOnPlayer = false;
                if (!placed) console.log(`Error placing ${restraint.name} on player!!!`);
                if (placed && ArcadeDeviousChallenge && KinkyDungeonDeviousDungeonAvailable() && !KinkyDungeonRestraintsLocked.includes(AssetGroup) && AssetGroup != "ItemHead" && InventoryAllow(
                    Player, placed.Asset) &&
                    (!InventoryGetLock(InventoryGet(Player, AssetGroup))
                    || (InventoryGetLock(InventoryGet(Player, AssetGroup)).Asset.OwnerOnly == false && InventoryGetLock(InventoryGet(Player, AssetGroup)).Asset.LoverOnly == false))) {
                    InventoryWear(Player, restraint.Asset, AssetGroup, restraint.Color, 10);
                    placedOnPlayer = true;
                }
                if (placed && !placed.Property) placed.Property = {};
                if (restraint.Type) {
                    KinkyDungeonPlayer.FocusGroup = AssetGroupGet("Female3DCG", AssetGroup);
                    let options = window["Inventory" + ((AssetGroup.includes("ItemMouth")) ? "ItemMouth" : AssetGroup) + restraint.Asset + "Options"];
                    if (!options) options = TypedItemDataLookup[`${AssetGroup}${restraint.Asset}`].options; // Try again
                    const option = options.find(o => o.Name === restraint.Type);
                    ExtendedItemSetType(KinkyDungeonPlayer, options, option);
                    if (placedOnPlayer) {
                        Player.FocusGroup = AssetGroupGet("Female3DCG", AssetGroup);
                        ExtendedItemSetType(Player, options, option);
                        Player.FocusGroup = null;
                    }
                    KinkyDungeonPlayer.FocusGroup = null;
                }
                if (restraint.Modules) {
                    let data = ModularItemDataLookup[AssetGroup + restraint.Asset];
                    let asset = data.asset;
                    let modules = data.modules;
                    // @ts-ignore
                    InventoryGet(KinkyDungeonPlayer, AssetGroup).Property = ModularItemMergeModuleValues({ asset, modules }, restraint.Modules);
                    if (placedOnPlayer) {
                        // @ts-ignore
                        InventoryGet(Player, AssetGroup).Property = ModularItemMergeModuleValues({ asset, modules }, restraint.Modules);
                    }
                }
                if (restraint.OverridePriority) {
                    if (!InventoryGet(KinkyDungeonPlayer, AssetGroup).Property) InventoryGet(KinkyDungeonPlayer, AssetGroup).Property = {OverridePriority: restraint.OverridePriority};
                    else InventoryGet(KinkyDungeonPlayer, AssetGroup).Property.OverridePriority = restraint.OverridePriority;
                }
                if (restraint.Color) {
                    // @ts-ignore
                    CharacterAppearanceSetColorForGroup(KinkyDungeonPlayer, restraint.Color, AssetGroup);
                    if (placedOnPlayer)
                        // @ts-ignore
                        CharacterAppearanceSetColorForGroup(Player, restraint.Color, AssetGroup);
                }
                let item = {name: restraint.name, type: Restraint, events:events ? events : restraint.events, tightness: tight, lock: ""};
                KinkyDungeonInventoryAdd(item);
 
                if (Lock) KinkyDungeonLock(item, Lock);
                else if (restraint.DefaultLock) KinkyDungeonLock(item, restraint.DefaultLock);
            } else if ((!Link && !linked) || SwitchItems) {
                KinkyDungeonCancelFlag = false;
                // Otherwise, if we did unlink an item, and we are not in the process of linking (very important to prevent loops)
                // Then we link the new item to the unlinked item if possible
                r = KinkyDungeonGetRestraintItem(restraint.Group);
                if (r && KDRestraint(r) && KinkyDungeonIsLinkable(KDRestraint(r), restraint))
                    KinkyDungeonLinkItem(restraint, r, Tightness, Lock, Keep);
            }
            KinkyDungeonCancelFlag = false;
        }
        KinkyDungeonWearForcedClothes();
        KinkyDungeonUpdateRestraints(0); // We update the restraints but no time drain on batteries, etc
        KinkyDungeonCheckClothesLoss = true; // We signal it is OK to check whether the player should get undressed due to restraints
        KinkyDungeonMultiplayerInventoryFlag = true; // Signal that we can send the inventory now
        KinkyDungeonSleepTime = 0;
        KinkyDungeonUpdateStruggleGroups();
        if (!KinkyDungeonRestraintAdded) {
            KinkyDungeonRestraintAdded = true;
            let sfx = (restraint && restraint.sfx) ? restraint.sfx : "Struggle";
            if (KinkyDungeonSound) AudioPlayInstantSound(KinkyDungeonRootDirectory + "/Audio/" + sfx + ".ogg");
        }
        let end = performance.now();
        if (KDDebug)
            console.log(`Took ${end - start} milliseconds to add restraint ${restraint.name}`);
        return Math.max(1, restraint.power);
    }
    return 0;
}

KinkyDungeonDeviousDungeonAvailable = function() {
    return KinkyDungeonIsPlayer();
}
 ArcadeDeviousChallenge = true
