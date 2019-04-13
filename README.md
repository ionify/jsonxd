# [ionify](http://about.ionify.net/)

**ion implemented for you**, is a flexible, unobtrusive & novel api for expressing ideas via
[**ion: invoked object notation**](https://github.com/ionify/about/blob/public/ions/ion.md).
It was
[created](http://key.ionify.net/)
by
[**Michael Lee**](https://github.com/iskitz)
and is maintained by
[**team ionify**](https://github.com/ionify/about/blob/public/README.md#team):

```javascript
~ {"json" : "data" }  <= /observable json/
+ {  log  : '👋🏾👨🏾‍💻'}  <= /message logging/
```


## why

**ion** & **ionify** enable exploring and experimenting with

+ [domain-specific languages](#domain-specific-languages)

+ [literate](#literate-programming),
  [modular](#modular-programming),
  [event-driven](#event-driven-programming),
  and
  [name-collision-free](#name-collision-freedom)
  programming

+ fetching, [observing](#decoupled-observation),
  and interacting with highly
  [decoupled](#decoupled-observation)
  data and code

+ and [more](https://github.com/ionify/ideas/)


## how

**ion** & **ionify** are enabled by, and can be implemented in, languages that support
[operator & operation overloading](https://en.wikipedia.org/wiki/Operator_overloading).
[JavaScript](https://github.com/ionify/ionify/),
[Java](https://github.com/ionify/ideas/blob/public/java/src/net/ionify/java/Hello.java) &
[Python](https://github.com/ionify/ideas/blob/public/python/ion.proof.py)
are three we've explored & confirmed capable.


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

*"...creating a domain-specific language...can be worthwhile if the language allows a particular type of problem or solution to be expressed more clearly than an existing language would allow..." - Wikipedia*

**ionify** enables creating language(s) via **ions** that define and map terms to behaviors:

```javascript
~
{ on:
    ['ask', 'say'],
 
  ask:
    function ask (ion)
      { ask.with.answer = prompt (ask.with.prep (ion.ask)) || ''
      },

  say:
    function say (ion)
      { alert (say.with.prep (ion.say))
      },

  prep:
    function prep (quote)
      { return quote.replace (/\[answer\]/g, prep.with.answer)
      }
}

~ / These ions can be in one or more files that /
+ / are fetched either locally or remotely ...  /
+
+ { say: "👋🏾 Hi!"                              }
+ { ask: "What's your name?"                   }
+ { say: "Hi [answer]! I'm Math E. Bot 🤓"     }
+ { ask: "[answer], what's 2 x 2?"             }
+ { say: "[answer]? Really? 🤔"                }
+ { ask: "Can I ask you another question?"     }
+ { say: 'I thought you\'d say "[answer]" 😉'  }
;
```

See [jeni](https://github.com/ionified/jeni-ions.iskitz.net?files=1)
for an
[in-depth](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.aeons.js)
[exploration](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
of ions and natural language.


### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

*"...a program is best thought of as a web...of simple parts and simple relations between those parts; the programmer's task is to state those parts and those relationships, in whatever order is best for human comprehension" -
[Donald E. Knuth](https://en.m.wikipedia.org/wiki/Donald_Knuth)*

```javascript
~
{ re:
    { id: 'frendlee@ionified.net'
    , is: "a literate & natural language programming exploration"
    , by: 'mike.lee@ionify'
    , on: '2017.12.08-08'
    , to: '2019.04.12-07'
    , in: 'san-jose.california.usa.earth'
    },

  do:
    [ "say hello"
    , "ask their name"
    , "invite them to play"
    ],

  "say hello":
    {say: "Hi! I'm Frend Lee!"}

  "ask their name":
    {ask: "What's your name?"}

  "invite them to play":
    {ask: "Hi [answer]! Wanna play?!"}
}
;
```

See [anemojii](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js),
our more in-depth exploration of literate programming.


### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

*"...a software design technique that emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality." - Wikipedia*

```javascript
~
{ re:
    { id: 'an.ionified.module@doma.in'
    , is: "a basic ion module example"
    , by: 'a.developer@doma.in'
    , on: '2007.09-04'
    , to: '2019.04.12-07'
    },

  do:function something ()
    { ~/ immediately do something /
    }
}
;
```


### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

*"...a programming paradigm in which the flow of the program is determined by events such as user actions..., sensor outputs, or messages from other programs/threads." - Wikipedia*

```javascript
~
{ on:'event',
  do:function someAct (ion)
    { ~ {log: ion.event} <= / logs "it happened!" /
    }
}

/ This event ion can exist within another file. /
+ {event: "it happened!"} <= / invokes an event /
;
```


### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)

**ionify** uses JavaScript's
[prototypal inheritance](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
and
[operation overloading](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
to enable observing objects without a direct reference. This enables observing json and other anonymous & named objects:

```javascript
~
{ on:'hi',
  hi:function hello (ion)
    {/ This method is called for each ion /
    +/ with a "hi" property. It logs the  /
    +/ value of that "hi" property.       /

    ~  { log:  ion.hi }
    ^  / logs "I'm an ion!" 1st /
    &  / logs "I'm a json!" 2nd /
    }
}

~ { hi : "I'm an ion!"} <= / can be in a separate /
+ {"hi": "I'm a json!"} <= / file loaded remotely /
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._


### [name collision freedom](https://en.wikipedia.org/wiki/Name_collision)

**ionify** enables observing and distinguishing between identically
identified **ions**.

Anonymous **[lions](https://github.com/ionify/about/blob/public/ions/ion.md#form):
literal ions**, i.e. `~/ / + [ ] & { }`, are anonymous objects that eliminate
name collisions by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).
**ionify** enables individually accessing and inspecting anonymous **lions**,
which enables the simultaneous coexistence of multiple **lions**, with exact
internal identifiers, within a single
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts):

```javascript
~
{ on:'my.ion@doma.in',
  do:function confirm (ion)
    {/ This method is called for each ion    /
    +/ with an id matching "my.ion@doma.in"  /
    +/ It confirms the ion developer before  /
    +/ describing what the ion is.           /

       if ( ion.re.by == "a.🇬🇾.developer" )
        ~ { log:  ion.re.is }
        ^ / logs "the intended module" /
    }
}


~/ Each of the following modules could be in a /
+/ separate file fetched locally or remotely!  /

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇯🇵+🇺🇸.developer'
    , on: '2009.12-08'
    , to: '2019.04.12-07'
    , in: 'san-jose.california.usa.earth'
    , is: "an identically id'd module"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾.developer'
    , in: 'georgetown.guyana.south-america.earth'
    , is: "the intended module"
    }
}

~
{ re:
    { id: 'my.ion@doma.in'
    , by: 'a.🇬🇾+🇺🇸.developer'
    , on: '2007.09-04'
    , to: '2009.12-05'
    , in: 'forest-hills.new-york.usa.earth'
    , is: "another identically id'd module"
    }
}
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._
