import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.DpC1ZpOZ.js";const m=JSON.parse('{"title":"Game Differences","description":"","frontmatter":{},"headers":[],"relativePath":"faq/differences.md","filePath":"faq/differences.md"}'),r={name:"faq/differences.md"},i=o('<h1 id="game-differences" tabindex="-1">Game Differences <a class="header-anchor" href="#game-differences" aria-label="Permalink to &quot;Game Differences&quot;">​</a></h1><p>Certain mechanics found in the original game have been slightly changed for my own sanity.</p><h2 id="card-versions" tabindex="-1">Card Versions <a class="header-anchor" href="#card-versions" aria-label="Permalink to &quot;Card Versions&quot;">​</a></h2><p>The cards have been implemented in what&#39;s been dubbed &quot;the wiki version&quot;. I believe this is the second-to-last rebalance before the game shuttered, and is what is reflected in the <a href="https://antifandom.com/solforge/wiki/Card_Sets" target="_blank" rel="noreferrer">Solforge Wiki</a>. This means some of the pre-con decks included with the game can be a bit off, as they were made with older card versions. The most notable breaking change is to cards that manipulate Defender, like <code>Statis Warden</code> and <code>Uranti Icemage</code>. <code>Stasis Indexer</code> is substituted when possible. The other change is <code>Energy Surge</code> getting an overload on Level 3, meaning &quot;infinite&quot; decks will in fact be finite.</p><p>I don&#39;t even have the details of the final rebalance, but I suspect KaelForge has implemented those specs. Implementing earlier versions may be fun (especially for revisiting older metas), but is currently the lowest of priorities and considered more chore than useful.</p><h2 id="randomized-batches" tabindex="-1">Randomized Batches <a class="header-anchor" href="#randomized-batches" aria-label="Permalink to &quot;Randomized Batches&quot;">​</a></h2><p>Batch resolution is not randomized.</p><ul><li>An example: a 5/5 <code>Lvl1 Spring Dryad</code> is on board, <code>Lvl2 Weirwood Patriarch</code> is forged.</li><li>In the original game, the effect that triggered first was random. You could end up with a 6/6 Dryad or a 9/9 Dryad.</li><li>In this version, the order will be the same if the initial conditions are the same.</li><li>For the real keeners, actual order somewhat explained <a href="./../rules/advanced-event-timing.html#trigger-resolution-order">here</a>. In this case there is one event we care about (Creature Enters), and Dryad had to exist first. Thus Dryad will always trigger second, resulting in a 9/9.</li></ul><h2 id="multiple-card-leveling" tabindex="-1">Multiple Card Leveling <a class="header-anchor" href="#multiple-card-leveling" aria-label="Permalink to &quot;Multiple Card Leveling&quot;">​</a></h2><p>When playing <code>Metasight</code>, <code>Perilous Insight</code>, or <code>Lvl3 Killion</code>, once a first card is selected for leveling, it is leveled. You cannot cancel back and re-pick as you can in most multi-select operations.</p><p>Similarly, <code>Discordant Strike</code> and <code>Thunderstomp</code> will apply the first effect and cannot be undone. This is to avoid confusion that the selection was registered, as the same target can be chosen for the second effect.</p><h2 id="formation" tabindex="-1">Formation <a class="header-anchor" href="#formation" aria-label="Permalink to &quot;Formation&quot;">​</a></h2><p>I&#39;m unable to find anything stating how the rule works with authority, but the wording suggests a Formation can happen any time a creature enters the field. So it is not restricted to Forge scenarios. Cards that have interactive Formation abilities (<code>Scourge Knights</code>, <code>Voltaic Prophet</code>) will only trigger on their player&#39;s turn.</p><h2 id="sudden-death" tabindex="-1">Sudden Death <a class="header-anchor" href="#sudden-death" aria-label="Permalink to &quot;Sudden Death&quot;">​</a></h2><p>There is currently no &quot;sudden death&quot; mode. If you both die and have the same health in death, you both win 🏆.</p><h2 id="extra-battles" tabindex="-1">Extra Battles <a class="header-anchor" href="#extra-battles" aria-label="Permalink to &quot;Extra Battles&quot;">​</a></h2><p>Rules around extra battles are slightly different. The new general rule is the first battle is the primary battle, and creatures only have a chance to participate in that if they are eligible at the time the button is pressed. Extra battles can only be spent after the primary battle. If a creature has an extra battle and is capable of battling, the battle button will be made available.</p><ul><li>Scenario 1: Play <code>Lvl2 Master of Elements</code>, Battle, play <code>Lvl1 Call the Lightning</code>, play <code>Lvl1 Lightning Brand</code>. <ul><li>In original Solforge, <code>Master of Elements</code> would not battle at all.</li><li>In this version, <code>Master of Elements</code> would battle one time after <code>Lightning Brand</code> was cast.</li></ul></li><li>Scenario 2: Play <code>Lvl2 Master of Elements</code>, Battle, play <code>Lvl1 Lightning Brand</code>, play <code>Lvl1 Call the Lightning</code>. <ul><li>In original Solforge, <code>Master of Elements</code> would battle twice after <code>Call the Lightning</code> was cast.</li><li>In this version, <code>Master of Elements</code> would battle one time after <code>Call the Lightning</code> was cast.</li></ul></li></ul><p>Regarding <code>Vaerus, Herald of Fury</code>, a creature receives the extra battle as one would expect (start of turn, Vaerus enters field, or new creature enters field). However, if Vaerus dies prior to the battle being used, the creature retains the extra battle.</p><h2 id="surviving-damage-effects" tabindex="-1">Surviving Damage Effects <a class="header-anchor" href="#surviving-damage-effects" aria-label="Permalink to &quot;Surviving Damage Effects&quot;">​</a></h2><p><code>Alyssa, Strifeborn</code> and <code>Dozer, the Dormant</code> will not function perfectly when hit with a barrage of damage that lowers their health to zero. These scenarios are rare but possible. As an example, <code>Pyre Song</code> can deal cumulative damage from each creature. In theory, Alyssa should survive and boost off each hit, and Dozer should replace on the first damage. The trigger that reacts to the damage will not activate until the following batch, so if the health is below 1, the creature will be death-checked before that batch can begin.</p><p>Other culprits can include arrangements of <code>Flamebreak Invokers</code>, <code>Cauldron Mystics</code>, <code>Ignurs</code>, or <code>Nug, Fury Fists</code>.</p><p><code>Dream Tree</code> works as expected since the effect does not influence the creature (so it&#39;s irrelevant if later damage killed it).</p><h2 id="ator-thunder-titan" tabindex="-1">Ator, Thunder Titan <a class="header-anchor" href="#ator-thunder-titan" aria-label="Permalink to &quot;Ator, Thunder Titan&quot;">​</a></h2><p>I cannot find what the original behavior was, but <code>Ator, Thunder Titan</code> will not apply the <code>Assault</code> effect retroactively. Only creatures forged after Ator is on the field will receive his blessings.</p><h2 id="brightsteel-gargoyle" tabindex="-1">Brightsteel Gargoyle <a class="header-anchor" href="#brightsteel-gargoyle" aria-label="Permalink to &quot;Brightsteel Gargoyle&quot;">​</a></h2><p><code>Brightsteel Gargoyle</code> does not change image when in defender mode. The amount of trickery to make this one card act fancy is currently in the &quot;not worth it&quot; pile.</p><h2 id="darkforged" tabindex="-1">Darkforged <a class="header-anchor" href="#darkforged" aria-label="Permalink to &quot;Darkforged&quot;">​</a></h2><p>A number of Darkforged cards had original text claiming they trigger &quot;when a friendly Darkforged enters play&quot; or give benefits &quot;for each friendly Darkforged&quot;. This would suggest the creature include themselves in their trigger, as other cards use the phrase &quot;another friendly X&quot; or &quot;other friendly X&quot;.</p><p>Given how overpowered the Darkforged are, I have added the term &quot;another&quot; or &quot;other&quot; to the following cards. I&#39;m not sure how the cards actually behaved in the original client.</p><ul><li><code>Darkroot Shambler</code></li><li><code>Darkshard Witch</code></li><li><code>Darksteel Enforcer</code></li><li><code>Darkstone Asir</code></li><li><code>Dusk Hammer</code></li><li><code>Shadeclaw Zombie</code></li><li><code>Shadowmist Angel</code></li><li><code>Shroudthorn Splicer</code></li><li><code>Umbraskin Yet</code></li></ul><h2 id="dozer-the-awakened" tabindex="-1">Dozer, The Awakened <a class="header-anchor" href="#dozer-the-awakened" aria-label="Permalink to &quot;Dozer, The Awakened&quot;">​</a></h2><p>If Dozer in his angry form is brought back through an effect (like Varna&#39;s Pact), it will have full health, not the adjusted starting health of its initial incarnation. I&#39;m not sure how this worked in the original version, but am not overhauling the graveyard mechanism for this one case. Resurrect your bears for fun and profit.</p><h2 id="grimgaunt-doomrider" tabindex="-1">Grimgaunt Doomrider <a class="header-anchor" href="#grimgaunt-doomrider" aria-label="Permalink to &quot;Grimgaunt Doomrider&quot;">​</a></h2><p>The behavior of <code>Grimgaunt Doomrider</code> is slighlty different. A dying Doomrider will move to the lane where a friendly creature died. In the original game it would not, but would still apply the debuff in that lane. An example:</p><ul><li>On your board are two Grimgaunt Doomriders and a <code>Nexus Core</code>. Your opponent has a <code>Flamebreak Invoker</code> opposite your mighty Core.</li><li>It is your opponents turn. They cast <code>Glacial Crush</code> on the Core.</li><li>The initial batch following the spell contains events for both casting the spell, and destroying the Core.</li><li>As it is your opponents turn, the first trigger to happen is Flamebreak Invoker reacting to the spell. It deals enough damage to both Doomriders to take their health well below zero (enough that they cannot buff themselves back to 1 health).</li><li>The next triggers are the Doomriders reacting to the death of the Core. While their health indicates they are at the moment dead, they are still in the batch so are not considered officially dead.</li><li>In the original Solforge, neither Doomriders would move, thus leaving the Core&#39;s lane unoccupied. However, they would apply apply the debuff to the Invoker opposite the core. Since neither moved, both Doomriders would see the Core&#39;s lane as empty, so both will apply the debuff.</li><li>In this version, the first Doomrider to trigger will move to the Core&#39;s lane and debuff the Invoker. The second Doomrider will trigger, see the lane as occupied, and do nothing. The Invoker is only debuffed once.</li><li>In both cases, the Doomriders die at the end of the batch.</li></ul><h2 id="lyria" tabindex="-1">Lyria <a class="header-anchor" href="#lyria" aria-label="Permalink to &quot;Lyria&quot;">​</a></h2><p><code>Lvl3 Lyria, Muse of Varna</code> now places creatures all at once, not in sequence. An example: if Lyria brought back four <code>Lvl1 Spring Dryads</code>, in the original game you would end up with a 4/4, 5/5, 6/6, and 7/7 set of Dryads. In this edition, you will end up with four 7/7 Dryads.</p><h2 id="shardplate-behemoth" tabindex="-1">Shardplate Behemoth <a class="header-anchor" href="#shardplate-behemoth" aria-label="Permalink to &quot;Shardplate Behemoth&quot;">​</a></h2><p>The original game had a left-to-right rule precedence. From Ximane&#39;s advanced rules:</p><blockquote><p>If a <code>Shardplate Behemoth</code> is to the left of an <code>Alloyin General</code>, its ability first makes its attack equal to its health, then the General&#39;s ability boosts its attack, which gives it 2 more attack than health. If the Behemoth is on the right of the General, the General boosts its attack, and then its attack is set to its health, effectively negating the General&#39;s ability.</p></blockquote><p>In this edition, Behemoth&#39;s card rule trumps all. The attack will always equal the health. However, if permanent attack buffs are applied to the Behemoth, and then it has abilities removed (e.g., <code>Wipe Clean</code> is cast), the buff will remain. So if <code>Lysian Shard</code> is cast on a Behemoth, then it is wiped, the resulting dino will have 6 attack, not 0.</p><h2 id="voltaic-prophet" tabindex="-1">Voltaic Prophet <a class="header-anchor" href="#voltaic-prophet" aria-label="Permalink to &quot;Voltaic Prophet&quot;">​</a></h2><p>It is unclear how the Level 2 formation effect should work. It can discard the entire hand, leveling cards that can level. Or it can only discard cards capable of leveling. I attempted the second way and it felt weird in action. So the first approach is implemented -- the entire hand will discard. Be sure to forge this on your last play.</p><h2 id="tribe-updates" tabindex="-1">Tribe Updates <a class="header-anchor" href="#tribe-updates" aria-label="Permalink to &quot;Tribe Updates&quot;">​</a></h2><p>Changed a few tribe types. Because I can.</p><ul><li><code>Ether Hounds</code> and <code>Snowdrift Alpha</code>: <code>Spirit</code> became <code>Spirit Wolf</code> to align with Ether Wolf.</li><li><code>Ether Wolf</code>: <code>Wolf</code> became <code>Spirit Wolf</code> to align with Ether Hounds.</li><li><code>Living Hive</code>: <code>Elemental</code> became <code>Insect Elemental</code>. I&#39;m still tempted to create a <code>Wax</code> type.</li><li><code>Valifrax</code>: <code>Dragon</code> became <code>Fire Ice Dragon</code> to align with Iztek.</li><li><code>Water Walker</code>: <code>Ice Asir</code> became <code>Water Asir</code>. Card is not named Ice Walker.</li></ul><h2 id="death-and-triggers" tabindex="-1">Death and Triggers <a class="header-anchor" href="#death-and-triggers" aria-label="Permalink to &quot;Death and Triggers&quot;">​</a></h2><p>Rules regarding creatures who affect other creatures based on event triggers, but die as the events happen. These were unclear in some cases and may be implemented different.</p><p>The rules for <code>Dr. Frankenbaum</code> and <code>Yuru, the Necrosage</code> were documented. Their effects only apply if they were alive, or died at the same time, when the target creature died. The time here is the specific death time, not the death check at the end of a <a href="./../rules/advanced-event-timing.html#death-checking">batch</a>.</p><p>As such, the following cards are using the same principle:</p><ul><li><code>Bride of Frankenbaum</code></li><li><code>Bulwark Battalion</code></li><li><code>Cauldron Mystic</code></li><li><code>Grimgaunt Betrayer</code></li><li><code>Grimgaunt Doomrider</code></li><li><code>Oreian Justicar</code></li><li><code>Sorrow Harvester</code></li><li><code>Tarsus, Deathweaver</code></li><li><code>Uterradon Rex</code></li></ul><p>An example:</p><ul><li>A player controls <code>Lvl1 Tarsus</code> and <code>Lvl1 Grove Matriarch</code>. Tarsus is opposing <code>Lvl1 Vengeful Spirit</code>, Matriarch is opposing <code>Lvl1 Swampmoss Lurker</code>.</li><li>Battle happens. In the combat batch, every creature but Tarsus dies. Tarsus has 2 health remaining. Nothing happens in the combat effects batch.</li><li>In the death effects batch, both Vengeance triggers are resolved.</li><li>If the Spirit trigger resolves first, Tarsus will be dead prior to the Matriarch dropping a <code>Seedling</code>. The Seedling will not get buffed by Tarsus.</li><li>If the Matriarch trigger resolves first, Tarsus is still alive and will buff the Seedling. This happens even though the &quot;Creature Enters&quot; event is processed in the next batch, and Tarsus has been marked dead at the end of the death effects batch.</li></ul>',54),l=[i];function n(d,h,s,c,u,f){return a(),t("div",null,l)}const p=e(r,[["render",n]]);export{m as __pageData,p as default};
