const css_color_level = {
  "0":"blue",
  "1":"green",
  "2":"orange"
};

const card_template_1 = {
  "school":'default',
  "casting-time":'1 standard action',
  "components":'S',
  "duration":'instantaneous',
  "saving":'no',
  "source":'Core',
  "level":'0',
};

cards = [
genDict({
  "name":'Spell 1',
  "sub-school":"crazy shit",
  "level":'0',
  "short":'This spell is normal',
  "text":'Here is all the fancy text that describes the spell',
  "duration":'10min'}, card_template_1),
genDict({
  "name":'Spell 2',
  "sub-school":"other shit",
  "school":"magic magic",
  "level":'1',
  "short":'This spell is awesome',
  "text":'Here is all the fancy text that describes the spell',
  "duration":'1 round/level'}),
];
