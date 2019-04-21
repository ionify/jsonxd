;
~
{ re:
    { id:  'id@ionify'
    , by: ['mike.lee', 'team']
    , on:  -4.200709
    , to:  -7.20190419
    , is:  -0.1
    , it:
        [" ensures that all ionified objects have an re.id.                  "
        ," sets an object's re.id value as a member mapped to its object re. "
        ," sets missing re & re.id on an object with a domain-named member.  "
        ," sets missing re on a object.                                      "
        ," sets missing re.id via ~next.id when possible.	                 "
        ],
      we:
        [" will ensure that ~debug & ~next.id don't keep using setID.nextID. "
        ," want ion.id " <= { id: 'name'   |/(.*)[-+\.\d]*@/
                            , at: 'doma.in'|/@(.*)/
                            , is:+'version'|/.*([-+]?\d*)@?/
                            , toString ()  {return 'name.version@doma.in'}
                            }
        ," like linking this ion although it doesn't currently rely on it.   "
        ]
    },

  on:
    [ 'id'
    ],

  id:   function
  setID (ion)
        { if (!ion.id || typeof ion.id != 'boolean') return

          var id = ion.hasOwnProperty ('re')
                ?  ion.re.id
                : (ion.re = {id: void 0}).id

          if (id || isFinite (id))
            return  setID.with.re (ion, id)

          setID.with.at     (ion)
          setID.with.own    (ion)
          setID.with.re     (ion)
          setID.with.object (ion)
        },

  re: function
  re  (ion  ,  id)
      { id || (id = ion.re.id)
      ! ion [id] && (ion [id] = ion.re)
        return id
      },

  at: function
  at  (ion)
      { for (var word in ion)
          if (~ word.search (/@/))
            { var    re  = ion [id = ion.re.id = word]
              typeof re == 'object'
                &&  (ion .re = re)
                && !('id' in   re)
                &&  ( re .id = id)
              return id
            }
      },

  own:function
  own (ion)
      { !   ion.re.id && !(ion.next && ion.id) && !ion.debug && ~{next:'ion', id:ion}
        !   ion.re.id
      //&& !ion.debug || (ion.re.as != 'logger')
      //&& (console.log ("no ~next.id; debug?", !!ion.debug, "using "+setID.nextId),true)
        && (ion.re.id = 'ion.'
                      + (own.nextId ? ++own.nextId
                                    :  (own.nextId = 1)))
      },

  object: function
  object  (ion)
          { var id = String (ion.re.id)
              , at = id.match (/@(.*)/)
              , is = id.match (/.*([-+]?\d*)@?/)
            ion.re.id = {id:id.match (/(.*)[-+\.\d]*@?/)[1], at:at?at[1]:'', __proto__:String.prototype}
            is        && (ion.re.is = is[1])
            ion.re.id && (ion.re.id.toString = function idToString ()  {return id})
          },

  valueOf:function
  start   ()
          { this.id.with        =  this
            delete this.valueOf >> this
          }
}
;