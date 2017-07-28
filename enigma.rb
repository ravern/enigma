#
# Emulates an Enigma machine
#
# Ravern Koh & Ong Wei Qiang
# CTG Assignment
# 28 July 2017
#

# Require files
require_relative './config'

# Constants
ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

# Printing can be done smoothly
$stdout.sync = true

# Where everything happens
def main
  # Title
  puts "\n---------------------------------------------------"
  puts 'Welcome to Enigma Emulator by Ravern and Wei Qiang!'
  puts '---------------------------------------------------'

  # Load config
  print 'Loading config'
  state = config
  3.times do
    sleep 0.5
    print '.'
  end
  print "\n"

  # Change the mapping for rotors based on ring setting
  state[:rotors].each do |rotor|
    rotor[:mapping] = rotate(rotor[:mapping].chars.map do |ch|
      ALPHABET[mod(ALPHABET.index(ch) + rotor[:ring_setting])]
    end.join(''), -rotor[:ring_setting])
  end

  # Duplicate the mapping for plugboard
  # e.g. turn ['AB'] into ['AB', 'BA']
  state[:plugboard][:mapping] = state[:plugboard][:mapping].flat_map do |pair|
    [pair, "#{pair[1]}#{pair[0]}"]
  end

  # Get message from user
  print 'Enter your message: '
  message = gets.strip.upcase.gsub(' ', '')

  # Begin loop
  puts "---------------------------------------------------\n"
  result = ''
  message.each_char do |ch|
    # For each char in the message, do the following

    # Rotate the rotors
    state[:rotors].last[:rotor_offset] += 1
    (state[:rotors].length - 1).times do |j|
      i = state[:rotors].length - 1 - j
      if mod(state[:rotors][i][:rotor_offset] - 1) == ALPHABET.index(state[:rotors][i][:turnover_ch])
        state[:rotors][i - 1][:rotor_offset] += 1
      end
    end

    # Print each rotor status
    puts
    state[:rotors].each_with_index do |rotor, i|
      puts "Rotor #{i + 1}"
      print_with_rot ALPHABET, 0
      print_with_rot ALPHABET, rotor[:rotor_offset]
      puts
      print_with_rot rotor[:mapping], rotor[:rotor_offset]

      # Print offsetted chars
      chars = rotor[:mapping].chars.map { |x| ALPHABET[mod(ALPHABET.index(x) - rotor[:rotor_offset])] }
      print_with_rot chars.join(''), rotor[:rotor_offset]
      puts
    end

    # Print headers
    puts 'Stage      | Char Mapping'
    puts '---------- + ------------'

    # Print plaintext char
    puts "Plaintext  | #{ch}"

    # Map the char through the plugboard
    plug_ch = ch
    state[:plugboard][:mapping].each do |pair|
      if pair[0] == ch
        plug_ch = pair[1]
      end
    end
    puts "Plugboard  | #{ch} => #{plug_ch}"

    # Map the char through each of the rotors and print
    old_ch = plug_ch
    state[:rotors].reverse.each_with_index do |rotor, i|
      idx = mod(ALPHABET.index(old_ch) + rotor[:rotor_offset])
      new_ch = rotor[:mapping][idx]
      puts "Rotor #{state[:rotors].length - i}    | #{ALPHABET[idx]} => #{new_ch}"
      old_ch = ALPHABET[mod(ALPHABET.index(new_ch) - rotor[:rotor_offset])]
    end

    # Map the char through the reflector
    reflect_ch = state[:reflector][:mapping][ALPHABET.index(old_ch)]
    puts "Reflector  | #{old_ch} => #{reflect_ch}"

    # Map the char through reverse of each of the rotors and print
    old_ch = reflect_ch
    state[:rotors].each_with_index do |rotor, i|
      idx = mod(ALPHABET.index(old_ch) + rotor[:rotor_offset])
      new_ch = ALPHABET[rotor[:mapping].index(ALPHABET[idx])]
      puts "Rotor #{i + 1}    | #{ALPHABET[idx]} => #{new_ch}"
      old_ch = ALPHABET[mod(ALPHABET.index(new_ch) - rotor[:rotor_offset])]
    end

    # Map through the plugboard again
    plug_ch = old_ch
    state[:plugboard][:mapping].each do |pair|
      if pair[0] == ch
        plug_ch = pair[1]
      end
    end
    puts "Plugboard  | #{plug_ch} => #{plug_ch}"

    # Print ciphertext char
    c_ch = plug_ch
    puts "Ciphertext | #{plug_ch}"

    # Print resulting ciphertext
    result += c_ch
    puts "\nEncrypted message: #{result}#{'_' * (message.length - result.length)}"

    # Print divider
    puts '--------------------------------------------------'

    # Let the user press enter to continue.
    gets
  end

  # Print goodbye
  puts 'Goodbye!'
  puts
end

# Print with rotation
def print_with_rot(str, rot)
  puts rotate(str, rot).chars.join(' ')
end

# Rotate a string
def rotate(str, rot)
  letters = []
  str.length.times do |i|
    idx = mod(rot + i, str.length)
    letters << str[idx]
  end
  letters.join('')
end

# Custom mod
def mod(i, length = 26)
  if i >= 0
    i % length
  else
    while i < 0
      i += length
    end
    i
  end
end

# Start the program
main
