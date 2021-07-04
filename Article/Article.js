/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: 'Nov 5th, 2018',
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: 'Javascript and You, ES6',
    date: 'May 7th, 2019',
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: 'React vs Angular vs Vue',
    date: 'June 7th, 2019',
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: 'Professional Software Development in 2019',
    date: 'Jan 1st, 2019',
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },  {
    title: 'Yarr, I get it, can I move on now?',
    date: 'Mar 3st, 1889',
    firstParagraph: `Execution dock mutiny plunder Pirate Round furl lookout Yellow Jack scurvy maroon league. Ballast parley cable gunwalls grapple line swing the lead warp keelhaul interloper. Sloop clipper nipperkin rope's end run a shot across the bow squiffy lugsail lookout parley Plate Fleet.`,

    secondParagraph: `Reef sails case shot heave to dead men tell no tales come about red ensign bucko bilge smartly coxswain. Nelsons folly gun mutiny scallywag hulk nipper Sea Legs hardtack dance the hempen jig cutlass. Mizzen keelhaul maroon take a caulk Blimey chandler salmagundi bilge water hornswaggle haul wind.`,

    thirdParagraph: `List Chain Shot hands blow the man down long boat bring a spring upon her cable belaying pin hardtack cable avast. Spanish Main jury mast list bounty crimp handsomely draft boatswain Privateer case shot. Topsail capstan deadlights Davy Jones' Locker lee ye dead men tell no tales long boat to go on account crow's nest.`
  },  {
    title: `Don't be swabbin my poop deck without proper consent`,
    date: 'Jun 32nd, 1901',
    firstParagraph: `Broadside black jack Barbary Coast reef sails scourge of the seven seas man-of-war snow jack Admiral of the Black fore. Bowsprit sheet Admiral of the Black league tack Arr prow swab Blimey plunder. Maroon piracy rum coxswain strike colors Jolly Roger killick Cat o'nine tails cutlass bilged on her anchor.`,

    secondParagraph: `Man-of-war hempen halter long boat gun coxswain sheet bilge water rope's end grapple clipper. Warp me quarterdeck Blimey Jolly Roger splice the main brace ballast run a rig jolly boat code of conduct. Prow fore barque wench long boat port squiffy dance the hempen jig poop deck pressgang.`,

    thirdParagraph: `Shiver me timbers swing the lead hardtack yo-ho-ho list Plate Fleet bilge water stern red ensign barque. Yo-ho-ho wench fluke swing the lead Yellow Jack landlubber or just lubber hang the jib reef weigh anchor gibbet. Smartly mutiny spirits gibbet Admiral of the Black lanyard line come about execution dock swing the lead.`
  }
];


//  Step 1: Create a function that creates a component. You will want your component to look like the template below: 


//   <div class="article">
//     <h2>{title of the article}</h2>
//     <p class="date">{date of the article}</p>

//     {three separate paragraph elements}

//     <span class='expandButton'></span>
//   </div>
//   Hint: You will need to use createElement more than once here!

//   Your function should take either an object as it's one argument, or 5 separate arguments mapping to each peice of the data object above.

function createArticle(title,date,firstParagraph,secondParagraph,thirdParagraph){
  // console.log(title);
  const ArticleItem = document.createElement('div');
  const ArticleTitle = document.createElement('h2');
  const ArticleDate = document.createElement('p');
  const ArticleFirstParagraph = document.createElement('p');
  const ArticleSecondParagraph = document.createElement('p');
  const ArticleThirdParagraph = document.createElement('p');
  const ArticleSpan = document.createElement('span');

  ArticleItem.appendChild(ArticleTitle);
  ArticleItem.appendChild(ArticleDate);
  ArticleItem.appendChild(ArticleFirstParagraph);
  ArticleItem.appendChild(ArticleSecondParagraph);
  ArticleItem.appendChild(ArticleThirdParagraph);
  ArticleItem.appendChild(ArticleSpan);

  ArticleItem.classList.add('article');
  ArticleDate.classList.add('date');
  ArticleSpan.classList.add('expandButton');
  

//   Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.
ArticleSpan.addEventListener('click', e => {
  ArticleItem.classList.toggle('article-open');

  if (ArticleItem.classList.contains('article-open')){
    ArticleSpan.textContent="Close";
    TweenLite.set(e.target.parentElement, {height:"auto"})
    TweenLite.from(e.target.parentElement, 1, {height:50})
  }else{
    ArticleSpan.textContent="Open";
    TweenLite.to(e.target.parentElement, 1, {height:50});
  }

});

ArticleTitle.textContent=title;
ArticleDate.textContent=date;
ArticleFirstParagraph.textContent=firstParagraph;
ArticleSecondParagraph.textContent=secondParagraph;
ArticleThirdParagraph.textContent=thirdParagraph;
ArticleSpan.textContent="Open";
//   Step 3: return the entire component.
return ArticleItem;
};

//   Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

const articlesSection = document.querySelector('.articles');
// alert(articlesSection);
// console.log(articlesSection);

data.map(item=>{
  articlesSection.appendChild(createArticle(item.title,item.date,item.firstParagraph,item.secondParagraph,item.thirdParagraph));
});

//   Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new artible

