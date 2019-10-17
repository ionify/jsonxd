~
{ on:'event'
, do (ion)
    { / log "it happened!" /
    * { log: ion.event     }
    * / on every event ion /
    }
}

~ /This event ion could be in a separate file./
~ {event: "it happened!"} <= /invokes an event/