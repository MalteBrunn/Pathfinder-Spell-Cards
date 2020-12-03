function spellcard (color, data) {
  //for (var i in data) {
  //  data[i] = data[i];//.trim();
  //}
  var html = '<!------------------------------------------------------------------>\n';
  html +=    '<div class="card '+ color +'"><div class="note">Source: ' + data['source'] + '</div>\n';
  html +=    '<h1>' + data['name'] + '<div>['+ data['level'] + ']</div></h1>\n';
  html +=    '<div>' + wrap(data['short'],'<div>','</div>\n');
  html +=    wrap(data['school'], '<div><strong>School</strong>', wrap(data['sub-school'],' (',')') + wrap(data['school-type'], ' [',']') + '</div>\n');
  html +=    wrap(data['casting-time'],'<div><strong>Casting Time</strong>','</div>\n');
  html +=    wrap(data['components'], '<div><strong>Components</strong>','</div>\n');
  html +=    wrap(data['range'],'<div><strong>Range</strong>', wrap(data['sub-range'],'(',')') + '</div>\n');
  html +=    wrap(data['effect'],'<div><strong>Effect</strong>','</div>\n');
  html +=    wrap(data['target'],'<div><strong>Targets</strong>','</div>\n');
  html +=    wrap(data['duration'],'<div><strong>Duration</strong>', '</div>\n');
  html +=    '<div>'
  html +=    wrap(data['saving'],'<strong>Saving Throw</strong>','\n');
  html +=    wrap(data['resist'],'<strong>Spell Resistance</strong>','\n');
  html +=    '</div></div><div><h2>Description</h2><div>\n';
  html +=    data['text'];
  html +=    '</div></div></div>\n';
  return html;
}

function genDict(opts, defaults=null) {
  var dict = {
    "name":'Title',
    "school":'',
    "sub-school":'',
    "school-type":'',
    "casting-time":'',
    "components":'',
    "range":'',
    "sub-range":'',
    "effect":'',
    "target":'',
    "duration":'',
    "saving":'',
    "resist":'',
    "text":'Main text.',
    "source":'Core',
    "level":'0',
    "short":''
  };
  if (defaults) {
    for (var key in defaults) {
      dict[key] = defaults[key];
    }
  }
  for (var key in opts) {
    dict[key] = opts[key];
  }
  return dict;
}

function wrap(data, left, right) {
  if (typeof data == 'string' && data != '') {
    var ret = left.concat(data)
    return ret.concat(right);
  }
  return '';
}
