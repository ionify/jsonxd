# [ionify](http://ionified.net/)

**implicit object notations invented for you**, is a flexible, unobtrusive & novel
[JavaScript](http://www.ecma-international.org/publications/standards/Ecma-262.htm)
[API](https://en.wikipedia.org/wiki/Application_programming_interface)
for expressing ideas via simple object interaction, observation & notification:


```javascript
~ {log: "hi!"}  <=  /shows hi!/;
```

## why

Because digital expression can and should be as natural as speech and text, and **ionify** makes exploring what's possible fun.

## how

**ionify's** enabled by
[**ion**: implicit object notation](https://github.com/ionify/ionify/blob/public/info/ion.md),
an incredibly versatile
[software design pattern](https://en.wikipedia.org/wiki/Software_design_pattern)
and programming language capability
[discovered](https://github.com/ionify/ionify/blob/public/info/story.md) by
[Michael Lee](https://github.com/iskitz) in 2007.

**ion** enables exploring and experimenting with

+ creating [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

+ [literate](https://en.wikipedia.org/wiki/Literate_programming),
  [modular](https://en.wikipedia.org/wiki/Modular_programming),
  [event-driven](https://en.wikipedia.org/wiki/Event-driven_programming),
  and
  [name-collision-free](https://en.wikipedia.org/wiki/Name_collision)
  programming

+ fetching, [observing](https://en.wikipedia.org/wiki/Observer_pattern),
  and interacting with highly
  [decoupled](https://en.wikipedia.org/wiki/Observer_pattern#Coupling_and_typical_pub-sub_implementations)
  data and code
  
+ & [more](https://github.com/ionify/ideas/)


### [domain-specific languages](https://en.wikipedia.org/wiki/Domain-specific_language)

**ionify** simplifies creating your own language(s). **ions** can define and map terms to any behavior.
They enable defining your own vocabulary and language to perform one
or more actions:

```javascript
~
{ on: ["ask", "say"]

, ask
:   function ask (question)
      { ask.ion.answer = confirm (question)
      }
, say
:   function say (something)
      { alert (something.replace (/\[answer]\]/g, say.ion.answer)
      }
}

~/ This ion can be in a separate file/
&/ fetched either locally or remotely/
+
{ ask: "Hi! What's your name?"
, say: "Hi [answer]!"
, ask: "How are you?"
, ask: "How come?"
, say: "..."
}
;
```

### [literate programming](https://en.wikipedia.org/wiki/Literate_programming)

See our
[anemojii](https://github.com/ionified/anemojii-ions.iskitz.net/blob/public/index.js)
 example.

### [modular programming](https://en.wikipedia.org/wiki/Modular_programming)

```javascript
~
{ re:
    { id: "my.ion.module@doma.in"
    , is: "a simple module example"
    , by: "a.developer@doma.in"
    , at: "2017.11.14-08...2007.09-04"
    }
    ,
  do:
    function something ()
      { ~/do something when this ion's evaluated/
      }
}
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._

### [event-driven programming](https://en.wikipedia.org/wiki/Event-driven_programming)

```javascript
~
{ on: "event"
, do:
    function someAction (ion)
      { ~{log: ion.event} <= /logs "it happened!"/
      }
}

~
/ This event ion can be in a separate file . . . /
& {event: "it happened!"} <= /activates an event /
;
```

### [no name collisions](https://en.wikipedia.org/wiki/Name_collision)

**ionify** enables observing and distinguishing between identically
identified **ions**.

Anonymous [**lions**: literal ions](https://github.com/ionify/ionify/blob/public/info/ion.md#form), i.e. `~/ / + [ ] & { }`, are anonymous objects that eliminate
name collisions by encapsulating their
[identifiers](https://en.m.wikipedia.org/wiki/Identifier#In_computer_languages).
**ionify** enables individually accessing and inspecting anonymous **lions**,
which enables the simultaneous coexistence of multiple **lions**, with exact
internal identifiers, within a single
[execution context](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-execution-contexts):

```javascript
~
{ on: "my.ion@doma.in"
, do:
    function confirm (ion)
      { / This method's called for each ion    /
      + / with an id matching "my.ion@doma.in"./
      + / It confirms the ion's developer...   /

        if (ion.re.by != "a.🇬🇾.developer") return

      ~ /...before using it/
      + {log: ion.re.is}
      }
}

~/ Each of the following modules /
+/ could be in a separate file   /
&/ fetched locally or remotely.  /
~
{ re:
    { id: "my.ion@doma.in"
    , by: "a.🇬🇾+🇯🇵+🇺🇸.developer"
    , at: "2017.11.20-08...2009.12-08"
    , in: "san-jose.california.usa.earth"
    , is: "an identically id'd module"
    }
}
~
{ re:
    { id: "my.ion@doma.in"
    , by: "a.🇬🇾.developer"
    , in: "georgetown.guyana.south-america.earth"
    , is: "a simple module"
    }
}
~
{ re:
    { id: "my.ion@doma.in"
    , by: "a.🇬🇾+🇺🇸.developer"
    , at: "2009.12-05...2007.09-04"
    , in: "forest-hills.new-york.usa.earth"
    , is: "also an identically id'd module"
    }
}
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._

### [decoupled observation](https://en.wikipedia.org/wiki/Observer_pattern)

**ionify** uses JavaScript's
[prototypal inheritance](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-objects)
and ability to interface with objects during their
[automatic type conversion](http://www.ecma-international.org/ecma-262/6.0/index.html#sec-tonumber)
to enable observing **ions** without a direct reference:

```javascript
~
{ on: "hi"
, hi:
    function hello (ion)
      { / This method's called for each ion with/
      + / a "hi" property. It then logs the "hi"/
      + / property's value.                     /

      + {log: ion.hi}
      }
}

~ { hi : "I'm an ion!"} <= /can be in a separate/
+ {"hi": "I'm a JSON!"} <= /file loaded remotely/
;
```

_fyi: Syntax highlighting issues are due to a
[Github bug](https://github.com/atom/language-javascript/issues/530#issuecomment-341976488)
not **ionify** or its syntax._


## who

**[team ionify](https://github.com/orgs/ionify/people)**
has developed and distributed **ions** & **ionify** since their initial
[discovery, definition & development](https://github.com/ionify/ionify/blob/public/info/story.md)
by [Michael Lee](https://github.com/iskitz) in 2007.

We invent optimized, natural, interfaces, for you, and
**aspire** to create accessible,
[simple](https://rawgit.com/ionified/anemojii-ions.iskitz.net/public/),
performant,
[intuitive](https://github.com/ionified/jeni-ions.iskitz.net/blob/public/jeni.play.js)
& reliable
[experiences](http://ionified.net) for all.


## vision

We hope to see **ionify** implemented in more languages that enable interfacing
with objects during type conversion.
[Java](https://github.com/ionify/ideas/blob/public/java/src/net/ionify/java/Hello.java) &
[Python](https://github.com/ionify/ideas/blob/public/python/ion.proof.py)
are two we've already experimented with and confirmed capable.

Looking ahead, **ionify's** API will be developed to enable

+ fetching in all JavaScript host environments
+ authenticating ions
+ automating ion discovery, assessment, and substitution
+ & programming via natural language.

We hope these improvements increase software development's accessibility for
every being capable of expressing ideas.

❤️ [team ionify](https://github.com/orgs/ionify/people)