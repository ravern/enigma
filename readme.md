# Enigma Emulator
by Ravern Koh and Ong Wei Qiang

# Pre-requisites
1. Adjust your terminal height to ~50 rows tall to obtain the optimal viewing experience.
2. Install Ruby

# Configuration
Configuration goes into the config.rb file. 4 components can be configured. The config file defines a single function `config` which has to return a hash containing the 4 components as keys.
```ruby
def config
  {
    plugboard: {},
    rotors: [{}, {}, {}],
    reflector: {}
  }
end
```
## Plugboard
Has a `mapping` key. The configuration below will result in a plugboard with `A` and `B` connected and `C` and `D` connected.
```ruby
plugboard: {
  mapping: ['AB', 'CD']
}
```
## Rotor
The rotor has a `mapping`, `rotor_offset`, `ring_setting` and a `turnover_ch` key. The string in the `mapping` key below states that `A => E`, `B => K`, `C => M`, etc. The configuration below generates a rotor with a rotor offset of `B` and a ring setting of `C`. Both `rotor_offset` and `ring_setting` start from 0.
```ruby
rotor: {
  mapping: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ',
  rotor_offset: 1,
  ring_setting: 2,
  turnover_ch: 'V'
}
```
## Reflector
The reflector has a `mapping` key, which does the same thing as the `rotor`'s `mapping` key.
```ruby
reflector: {
  mapping: 'EKMFLGDQVZNTOWYHXUSPAIBRCJ'
}
```

# Running the program
Use Ruby to run the `enigma.rb` file.
```bash
$ pwd
your/path/to/enigma/
$ ruby enigma.rb
```
Follow the prompts (Enter your message when asked to). The program will encrypt the message 1 char at a time (due to its stream nature). Press `enter` to go to the next char.

# Authors
+ Ravern Koh
+ Ong Wei Qiang

# References
+ [http://enigmaco.de](http://enigmaco.de)
+ [http://enigma.louisedade.co.uk/enigma.html](http://enigma.louisedade.co.uk/enigma.html)
