var N = null;var searchIndex = {};
searchIndex["arrayvec"]={"doc":"arrayvec provides the types `ArrayVec` and `ArrayString`:  array-backed vector and string types, which store their contents inline.","items":[[3,"ArrayString","arrayvec","A string with a fixed capacity.",N,N],[3,"CapacityError","","Error value indicating insufficient capacity",N,N],[3,"ArrayVec","","A vector with a fixed capacity.",N,N],[3,"IntoIter","","By-value iterator for `ArrayVec`.",N,N],[3,"Drain","","A draining iterator for `ArrayVec`.",N,N],[11,"default","","Return an empty `ArrayString`",0,[[],["arraystring"]]],[11,"new","","Create a new empty `ArrayString`.",0,[[],["arraystring"]]],[11,"from","","Create a new `ArrayString` from a `str`.",0,[[["str"]],["result",["capacityerror"]]]],[11,"from_byte_string","","Create a new `ArrayString` from a byte string literal.",0,[[["a"]],["result",["utf8error"]]]],[11,"capacity","","Return the capacity of the `ArrayString`.",0,[[["self"]],["usize"]]],[11,"is_full","","Return if the `ArrayString` is completely filled.",0,[[["self"]],["bool"]]],[11,"push","","Adds the given char to the end of the string.",0,[[["self"],["char"]]]],[11,"try_push","","Adds the given char to the end of the string.",0,[[["self"],["char"]],["result",["capacityerror"]]]],[11,"push_str","","Adds the given string slice to the end of the string.",0,[[["self"],["str"]]]],[11,"try_push_str","","Adds the given string slice to the end of the string.",0,[[["self"],["str"]],["result",["capacityerror"]]]],[11,"pop","","Removes the last character from the string and returns it.",0,[[["self"]],["option",["char"]]]],[11,"truncate","","Shortens this `ArrayString` to the specified length.",0,[[["self"],["usize"]]]],[11,"remove","","Removes a `char` from this `ArrayString` at a byte position and returns it.",0,[[["self"],["usize"]],["char"]]],[11,"clear","","Make the string empty.",0,[[["self"]]]],[11,"set_len","","Set the strings’s length.",0,[[["self"],["usize"]]]],[11,"as_str","","Return a string slice of the whole `ArrayString`.",0,[[["self"]],["str"]]],[11,"deref","","",0,[[["self"]],["str"]]],[11,"deref_mut","","",0,[[["self"]],["str"]]],[11,"eq","","",0,[[["self"],["self"]],["bool"]]],[11,"eq","","",0,[[["self"],["str"]],["bool"]]],[11,"hash","","",0,[[["self"],["h"]]]],[11,"borrow","","",0,[[["self"]],["str"]]],[11,"as_ref","","",0,[[["self"]],["str"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"write_char","","",0,[[["self"],["char"]],["result"]]],[11,"write_str","","",0,[[["self"],["str"]],["result"]]],[11,"clone","","",0,[[["self"]],["arraystring"]]],[11,"clone_from","","",0,[[["self"],["self"]]]],[11,"partial_cmp","","",0,[[["self"],["self"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["self"]],["bool"]]],[11,"le","","",0,[[["self"],["self"]],["bool"]]],[11,"gt","","",0,[[["self"],["self"]],["bool"]]],[11,"ge","","",0,[[["self"],["self"]],["bool"]]],[11,"partial_cmp","","",0,[[["self"],["str"]],["option",["ordering"]]]],[11,"lt","","",0,[[["self"],["str"]],["bool"]]],[11,"le","","",0,[[["self"],["str"]],["bool"]]],[11,"gt","","",0,[[["self"],["str"]],["bool"]]],[11,"ge","","",0,[[["self"],["str"]],["bool"]]],[11,"cmp","","",0,[[["self"],["self"]],["ordering"]]],[11,"clone","","",1,[[["self"]],["capacityerror"]]],[11,"cmp","","",1,[[["self"],["capacityerror"]],["ordering"]]],[11,"eq","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"ne","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"partial_cmp","","",1,[[["self"],["capacityerror"]],["option",["ordering"]]]],[11,"lt","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"le","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"gt","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"ge","","",1,[[["self"],["capacityerror"]],["bool"]]],[11,"new","","Create a new `CapacityError` from `element`.",1,[[["t"]],["capacityerror"]]],[11,"element","","Extract the overflowing element",1,[[["self"]],["t"]]],[11,"simplify","","Convert into a `CapacityError` that does not carry an element.",1,[[["self"]],["capacityerror"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[8,"Array","","Trait for fixed size arrays.",N,N],[16,"Item","","The array’s element type",2,N],[8,"RangeArgument","","`RangeArgument` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b` or `c..d`.",N,N],[11,"start","","Start index (inclusive)",3,[[["self"]],["option",["usize"]]]],[11,"end","","End index (exclusive)",3,[[["self"]],["option",["usize"]]]],[11,"drop","","",4,[[["self"]]]],[11,"new","","Create a new empty `ArrayVec`.",4,[[],["arrayvec"]]],[11,"len","","Return the number of elements in the `ArrayVec`.",4,[[["self"]],["usize"]]],[11,"capacity","","Return the capacity of the `ArrayVec`.",4,[[["self"]],["usize"]]],[11,"is_full","","Return if the `ArrayVec` is completely filled.",4,[[["self"]],["bool"]]],[11,"push","","Push `element` to the end of the vector.",4,N],[11,"try_push","","Push `element` to the end of the vector.",4,N],[11,"push_unchecked","","Push `element` to the end of the vector without checking the capacity.",4,N],[11,"insert","","Insert `element` at position `index`.",4,N],[11,"try_insert","","Insert `element` at position `index`.",4,N],[11,"pop","","Remove the last element in the vector and return it.",4,[[["self"]],["option"]]],[11,"swap_remove","","Remove the element at `index` and swap the last element into its place.",4,N],[11,"swap_pop","","Remove the element at `index` and swap the last element into its place.",4,[[["self"],["usize"]],["option"]]],[11,"remove","","Remove the element at `index` and shift down the following elements.",4,N],[11,"pop_at","","Remove the element at `index` and shift down the following elements.",4,[[["self"],["usize"]],["option"]]],[11,"truncate","","Shortens the vector, keeping the first `len` elements and dropping the rest.",4,[[["self"],["usize"]]]],[11,"clear","","Remove all elements in the vector.",4,[[["self"]]]],[11,"retain","","Retains only the elements specified by the predicate.",4,[[["self"],["f"]]]],[11,"set_len","","Set the vector’s length without dropping or moving out elements",4,[[["self"],["usize"]]]],[11,"drain","","Create a draining iterator that removes the specified range in the vector and yields the removed items from start to end. The element range is removed even if the iterator is not consumed until the end.",4,[[["self"],["r"]],["drain"]]],[11,"into_inner","","Return the inner fixed size array, if it is full to its capacity.",4,[[["self"]],["result"]]],[11,"dispose","","Dispose of `self` without the overwriting that is needed in Drop.",4,[[["self"]]]],[11,"as_slice","","Return a slice containing all elements of the vector.",4,N],[11,"as_mut_slice","","Return a mutable slice containing all elements of the vector.",4,N],[11,"deref","","",4,N],[11,"deref_mut","","",4,N],[11,"from","","",4,[[["a"]],["self"]]],[11,"into_iter","","",4,[[["self"]],["intoiter"]]],[11,"next","","",5,[[["self"]],["option"]]],[11,"size_hint","","",5,N],[11,"next_back","","",5,[[["self"]],["option"]]],[11,"drop","","",5,[[["self"]]]],[11,"next","","",6,[[["self"]],["option"]]],[11,"size_hint","","",6,N],[11,"next_back","","",6,[[["self"]],["option"]]],[11,"drop","","",6,[[["self"]]]],[11,"extend","","",4,[[["self"],["t"]]]],[11,"from_iter","","",4,[[["t"]],["self"]]],[11,"clone","","",4,[[["self"]],["self"]]],[11,"clone_from","","",4,[[["self"],["self"]]]],[11,"hash","","",4,[[["self"],["h"]]]],[11,"eq","","",4,[[["self"],["self"]],["bool"]]],[11,"eq","","",4,N],[11,"borrow","","",4,N],[11,"borrow_mut","","",4,N],[11,"as_ref","","",4,N],[11,"as_mut","","",4,N],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"default","","Return an empty array",4,[[],["arrayvec"]]],[11,"partial_cmp","","",4,[[["self"],["arrayvec"]],["option",["ordering"]]]],[11,"lt","","",4,[[["self"],["self"]],["bool"]]],[11,"le","","",4,[[["self"],["self"]],["bool"]]],[11,"ge","","",4,[[["self"],["self"]],["bool"]]],[11,"gt","","",4,[[["self"],["self"]],["bool"]]],[11,"cmp","","",4,[[["self"],["arrayvec"]],["ordering"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into_iter","","",4,[[["self"]],["i"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"into_iter","","",5,[[["self"]],["i"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"from","","",6,[[["t"]],["t"]]],[11,"into_iter","","",6,[[["self"]],["i"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"start","","Start index (inclusive)",3,[[["self"]],["option",["usize"]]]],[11,"end","","End index (exclusive)",3,[[["self"]],["option",["usize"]]]]],"paths":[[3,"ArrayString"],[3,"CapacityError"],[8,"Array"],[8,"RangeArgument"],[3,"ArrayVec"],[3,"IntoIter"],[3,"Drain"]]};
searchIndex["cfg_if"]={"doc":"A macro for defining `#[cfg]` if-else statements.","items":[[14,"cfg_if","cfg_if","",N,N]],"paths":[]};
searchIndex["gcode"]={"doc":"","items":[[3,"Parser","gcode","An error-resistent streaming gcode parser.",N,N],[3,"Nop","","A no-op set of callbacks.",N,N],[3,"Span","","The location of something within a string.",N,N],[12,"start","","",0,N],[12,"end","","",0,N],[12,"source_line","","",0,N],[3,"Block","","A block containing `Gcode` commands and/or comments.",N,N],[3,"Gcode","","A single gcode command.",N,N],[3,"Argument","","A command argument.",N,N],[12,"letter","","",1,N],[12,"value","","",1,N],[12,"span","","",1,N],[3,"Comment","","A comment.",N,N],[12,"span","","",2,N],[4,"TokenKind","","The various token types that make up a gcode program.",N,N],[13,"Letter","","",3,N],[13,"Number","","",3,N],[13,"Comment","","",3,N],[13,"Newline","","",3,N],[13,"ForwardSlash","","",3,N],[13,"Percent","","",3,N],[13,"Garbage","","",3,N],[4,"Mnemonic","","The general category a `Gcode` belongs to.",N,N],[13,"General","","",4,N],[13,"Miscellaneous","","",4,N],[13,"ProgramNumber","","",4,N],[13,"ToolChange","","",4,N],[5,"parse","","Convenience function for parsing a string of text into `Gcode`s, ignoring any errors which may occur.",N,N],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"clone","","",5,[[["self"]],["parser"]]],[11,"new","","",5,[[["str"]],["parser",["nop"]]]],[11,"new_with_callbacks","","",5,[[["str"],["c"]],["parser"]]],[11,"callbacks","","Access the inner `Callbacks` object.",5,[[["self"]],["c"]]],[11,"next","","",5,[[["self"]],["option"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"clone","","",6,[[["self"]],["nop"]]],[11,"eq","","",6,[[["self"],["nop"]],["bool"]]],[0,"transforms","","",N,N],[3,"Map","gcode::transforms","",N,N],[8,"GcodeTransforms","","A helper trait which adds useful extension methods to all [`Gcode`] iterators.",N,N],[11,"map_gcode","","Apply a transformation to all [`Gcode`]s which satisfy a particular condition.",7,[[["self"],["s"],["f"]],["map"]]],[8,"Predicate","","A generic predicate.",N,N],[10,"evaluate","","",8,[[["self"],["t"]],["bool"]]],[11,"fmt","","",9,[[["self"],["formatter"]],["result"]]],[11,"next","","",9,[[["self"]],["option"]]],[11,"evaluate","gcode","Select any [`Gcode`]s which have this [`Mnemonic`].",4,[[["self"],["gcode"]],["bool"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"clone","","",0,[[["self"]],["span"]]],[11,"eq","","",0,[[["self"],["span"]],["bool"]]],[11,"ne","","",0,[[["self"],["span"]],["bool"]]],[11,"new","","",0,[[["usize"],["usize"],["usize"]],["span"]]],[11,"placeholder","","",0,[[],["span"]]],[11,"is_placeholder","","",0,[[["self"]],["bool"]]],[11,"text_from_source","","",0,[[["self"],["str"]],["option",["str"]]]],[11,"merge","","",0,[[["self"],["span"]],["span"]]],[11,"default","","",0,[[],["span"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"clone","","",3,[[["self"]],["tokenkind"]]],[11,"eq","","",3,[[["self"],["tokenkind"]],["bool"]]],[11,"hash","","",3,N],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",10,[[["self"],["formatter"]],["result"]]],[11,"clone","","",10,[[["self"]],["block"]]],[11,"eq","","",10,[[["self"],["block"]],["bool"]]],[11,"ne","","",10,[[["self"],["block"]],["bool"]]],[11,"is_empty","","",10,[[["self"]],["bool"]]],[11,"into_commands","","",10,N],[11,"commands","","",10,N],[11,"commands_mut","","",10,N],[11,"comments","","",10,N],[11,"span","","",10,[[["self"]],["span"]]],[11,"line_number","","",10,[[["self"]],["option",["usize"]]]],[11,"with_line_number","","",10,[[["self"],["usize"],["span"]],["self"]]],[11,"deleted","","",10,[[["self"]],["bool"]]],[11,"delete","","",10,[[["self"],["bool"]]]],[11,"push_comment","","",10,[[["self"],["comment"]]]],[11,"push_command","","",10,[[["self"],["gcode"]]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"clone","","",11,[[["self"]],["gcode"]]],[11,"eq","","",11,[[["self"],["gcode"]],["bool"]]],[11,"ne","","",11,[[["self"],["gcode"]],["bool"]]],[11,"new","","",11,[[["mnemonic"],["f32"]],["gcode"]]],[11,"mnemonic","","",11,[[["self"]],["mnemonic"]]],[11,"major_number","","",11,[[["self"]],["usize"]]],[11,"minor_number","","",11,[[["self"]],["option",["usize"]]]],[11,"args","","",11,N],[11,"args_mut","","",11,N],[11,"with_line_number","","",11,[[["self"],["usize"]],["self"]]],[11,"with_minor_number","","",11,[[["self"],["usize"]],["self"]]],[11,"with_argument","","Add an argument to the [`Gcode`], removing any previous arguments with the same letter.",11,[[["self"],["argument"]],["self"]]],[11,"with_span","","",11,[[["self"],["span"]],["self"]]],[11,"push_argument","","",11,[[["self"],["argument"]]]],[11,"remove_argument","","Remove the first argument with the specified `letter`.",11,[[["self"],["char"]],["option",["argument"]]]],[11,"span","","",11,[[["self"]],["span"]]],[11,"line_number","","",11,[[["self"]],["option",["usize"]]]],[11,"value_for","","",11,[[["self"],["char"]],["option",["f32"]]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"clone","","",1,[[["self"]],["argument"]]],[11,"eq","","",1,[[["self"],["argument"]],["bool"]]],[11,"ne","","",1,[[["self"],["argument"]],["bool"]]],[11,"new","","",1,[[["char"],["f32"],["span"]],["argument"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"clone","","",2,[[["self"]],["comment"]]],[11,"eq","","",2,[[["self"],["comment"]],["bool"]]],[11,"ne","","",2,[[["self"],["comment"]],["bool"]]],[11,"new","","",2,[[["str"],["span"]],["comment"]]],[11,"body","","",2,[[["self"]],["str"]]],[11,"new_cow","","",2,[[["s"],["span"]],["comment"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"clone","","",4,[[["self"]],["mnemonic"]]],[11,"eq","","",4,[[["self"],["mnemonic"]],["bool"]]],[11,"hash","","",4,N],[8,"Callbacks","","Callback functions the `Parser` can use to notify the user of errors encountered while parsing.",N,N],[11,"unexpected_token","","",12,N],[11,"unexpected_eof","","",12,N],[11,"mangled_input","","",12,[[["self"],["str"],["span"]]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N],[11,"from","","",5,[[["t"]],["t"]]],[11,"into_iter","","",5,[[["self"]],["i"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"to_owned","","",6,[[["self"]],["t"]]],[11,"clone_into","","",6,N],[11,"from","","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",10,[[["self"]],["t"]]],[11,"clone_into","","",10,N],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"to_owned","","",11,[[["self"]],["t"]]],[11,"clone_into","","",11,N],[11,"from","","",11,[[["t"]],["t"]]],[11,"into","","",11,[[["self"]],["u"]]],[11,"try_from","","",11,[[["u"]],["result"]]],[11,"borrow","","",11,[[["self"]],["t"]]],[11,"try_into","","",11,[[["self"]],["result"]]],[11,"borrow_mut","","",11,[[["self"]],["t"]]],[11,"get_type_id","","",11,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"from","","",1,[[["t"]],["t"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"from","","",3,[[["t"]],["t"]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"evaluate","","",4,[[["self"],["t"]],["bool"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"unexpected_token","","",12,N],[11,"unexpected_eof","","",12,N],[11,"mangled_input","","",12,[[["self"],["str"],["span"]]]],[11,"from","gcode::transforms","",9,[[["t"]],["t"]]],[11,"into_iter","","",9,[[["self"]],["i"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]]],"paths":[[3,"Span"],[3,"Argument"],[3,"Comment"],[4,"TokenKind"],[4,"Mnemonic"],[3,"Parser"],[3,"Nop"],[8,"GcodeTransforms"],[8,"Predicate"],[3,"Map"],[3,"Block"],[3,"Gcode"],[8,"Callbacks"]]};
searchIndex["gcode_simulator"]={"doc":"","items":[[0,"operations","gcode_simulator","",N,N],[3,"Dwell","gcode_simulator::operations","",N,N],[12,"duration","","The number of seconds to wait for.",0,N],[3,"LinearInterpolate","","",N,N],[12,"x","","",1,N],[12,"y","","",1,N],[12,"feed_rate","","",1,N],[4,"ConversionError","","",N,N],[13,"IncorrectMajorNumber","","The `Gcode` had the wrong major number.",2,N],[12,"found","gcode_simulator::operations::ConversionError","",2,N],[12,"expected","","",2,N],[13,"InvalidArgument","gcode_simulator::operations","An argument contained an invalid value.",2,N],[12,"letter","gcode_simulator::operations::ConversionError","",2,N],[12,"value","","",2,N],[12,"message","","",2,N],[13,"MissingArguments","gcode_simulator::operations","One or more arguments were missing.",2,N],[12,"expected","gcode_simulator::operations::ConversionError","",2,N],[8,"Operation","gcode_simulator::operations","",N,N],[10,"state_after","","",3,[[["self"],["f32"],["state"]],["state"]]],[10,"duration","","",3,[[["self"],["state"]],["f32"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"clone","","",2,[[["self"]],["conversionerror"]]],[11,"eq","","",2,[[["self"],["conversionerror"]],["bool"]]],[11,"ne","","",2,[[["self"],["conversionerror"]],["bool"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"clone","","",0,[[["self"]],["dwell"]]],[11,"eq","","",0,[[["self"],["dwell"]],["bool"]]],[11,"ne","","",0,[[["self"],["dwell"]],["bool"]]],[11,"new","","",0,[[["f32"]],["dwell"]]],[11,"state_after","","",0,[[["self"],["f32"],["state"]],["state"]]],[11,"duration","","",0,[[["self"],["state"]],["f32"]]],[11,"try_from","","",0,[[["gcode"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"default","","",1,[[],["linearinterpolate"]]],[11,"clone","","",1,[[["self"]],["linearinterpolate"]]],[11,"eq","","",1,[[["self"],["linearinterpolate"]],["bool"]]],[11,"ne","","",1,[[["self"],["linearinterpolate"]],["bool"]]],[11,"state_after","","",1,[[["self"],["f32"],["state"]],["state"]]],[11,"duration","","",1,[[["self"],["state"]],["f32"]]],[11,"try_from","","",1,[[["gcode"]],["result"]]],[0,"state","gcode_simulator","",N,N],[3,"State","gcode_simulator::state","The internal state of a simple 2-dimensional gantry system.",N,N],[12,"x","","",4,N],[12,"y","","",4,N],[12,"feed_rate","","The feed rate in units per minute.",4,N],[12,"coordinate_mode","","",4,N],[4,"CoordinateMode","","",N,N],[13,"Absolute","","",5,N],[13,"Relative","","",5,N],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"clone","","",4,[[["self"]],["state"]]],[11,"eq","","",4,[[["self"],["state"]],["bool"]]],[11,"ne","","",4,[[["self"],["state"]],["bool"]]],[11,"default","","",4,[[],["state"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"clone","","",5,[[["self"]],["coordinatemode"]]],[11,"eq","","",5,[[["self"],["coordinatemode"]],["bool"]]],[11,"hash","","",5,N],[8,"TryFrom","gcode_simulator","A stand-in for the currently unstable `std::convert::TryFrom` trait.",N,N],[16,"Error","","",6,N],[10,"try_from","","",6,[[["t"]],["result"]]],[11,"try_from","gcode_simulator::operations","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","gcode_simulator::state","",4,[[["u"]],["result"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"try_from","","",5,[[["u"]],["result"]]],[11,"from","","",5,[[["t"]],["t"]]],[11,"try_into","","",5,[[["self"]],["result"]]],[11,"into","","",5,[[["self"]],["u"]]],[11,"borrow","","",5,[[["self"]],["t"]]],[11,"borrow_mut","","",5,[[["self"]],["t"]]],[11,"get_type_id","","",5,[[["self"]],["typeid"]]],[11,"to_owned","","",5,[[["self"]],["t"]]],[11,"clone_into","","",5,N]],"paths":[[3,"Dwell"],[3,"LinearInterpolate"],[4,"ConversionError"],[8,"Operation"],[3,"State"],[4,"CoordinateMode"],[8,"TryFrom"]]};
searchIndex["libm"]={"doc":"libm in pure Rust","items":[[5,"acos","libm","",N,[[["f64"]],["f64"]]],[5,"acosf","","",N,[[["f32"]],["f32"]]],[5,"asin","","",N,[[["f64"]],["f64"]]],[5,"asinf","","",N,[[["f32"]],["f32"]]],[5,"atan","","",N,[[["f64"]],["f64"]]],[5,"atan2","","",N,[[["f64"],["f64"]],["f64"]]],[5,"atan2f","","",N,[[["f32"],["f32"]],["f32"]]],[5,"atanf","","",N,[[["f32"]],["f32"]]],[5,"cbrt","","",N,[[["f64"]],["f64"]]],[5,"cbrtf","","",N,[[["f32"]],["f32"]]],[5,"ceil","","",N,[[["f64"]],["f64"]]],[5,"ceilf","","",N,[[["f32"]],["f32"]]],[5,"cos","","",N,[[["f64"]],["f64"]]],[5,"cosf","","",N,[[["f32"]],["f32"]]],[5,"cosh","","",N,[[["f64"]],["f64"]]],[5,"coshf","","",N,[[["f32"]],["f32"]]],[5,"exp","","",N,[[["f64"]],["f64"]]],[5,"exp2","","",N,[[["f64"]],["f64"]]],[5,"exp2f","","",N,[[["f32"]],["f32"]]],[5,"expf","","",N,[[["f32"]],["f32"]]],[5,"expm1","","",N,[[["f64"]],["f64"]]],[5,"expm1f","","",N,[[["f32"]],["f32"]]],[5,"fabs","","",N,[[["f64"]],["f64"]]],[5,"fabsf","","",N,[[["f32"]],["f32"]]],[5,"fdim","","",N,[[["f64"],["f64"]],["f64"]]],[5,"fdimf","","",N,[[["f32"],["f32"]],["f32"]]],[5,"floor","","",N,[[["f64"]],["f64"]]],[5,"floorf","","",N,[[["f32"]],["f32"]]],[5,"fma","","",N,[[["f64"],["f64"],["f64"]],["f64"]]],[5,"fmaf","","",N,[[["f32"],["f32"],["f32"]],["f32"]]],[5,"fmod","","",N,[[["f64"],["f64"]],["f64"]]],[5,"fmodf","","",N,[[["f32"],["f32"]],["f32"]]],[5,"hypot","","",N,[[["f64"],["f64"]],["f64"]]],[5,"hypotf","","",N,[[["f32"],["f32"]],["f32"]]],[5,"log","","",N,[[["f64"]],["f64"]]],[5,"log10","","",N,[[["f64"]],["f64"]]],[5,"log10f","","",N,[[["f32"]],["f32"]]],[5,"log1p","","",N,[[["f64"]],["f64"]]],[5,"log1pf","","",N,[[["f32"]],["f32"]]],[5,"log2","","",N,[[["f64"]],["f64"]]],[5,"log2f","","",N,[[["f32"]],["f32"]]],[5,"logf","","",N,[[["f32"]],["f32"]]],[5,"pow","","",N,[[["f64"],["f64"]],["f64"]]],[5,"powf","","",N,[[["f32"],["f32"]],["f32"]]],[5,"round","","",N,[[["f64"]],["f64"]]],[5,"roundf","","",N,[[["f32"]],["f32"]]],[5,"scalbn","","",N,[[["f64"],["i32"]],["f64"]]],[5,"scalbnf","","",N,[[["f32"],["i32"]],["f32"]]],[5,"sin","","",N,[[["f64"]],["f64"]]],[5,"sinf","","",N,[[["f32"]],["f32"]]],[5,"sinh","","",N,[[["f64"]],["f64"]]],[5,"sinhf","","",N,[[["f32"]],["f32"]]],[5,"sqrt","","",N,[[["f64"]],["f64"]]],[5,"sqrtf","","",N,[[["f32"]],["f32"]]],[5,"tan","","",N,[[["f64"]],["f64"]]],[5,"tanf","","",N,[[["f32"]],["f32"]]],[5,"tanh","","",N,[[["f64"]],["f64"]]],[5,"tanhf","","",N,[[["f32"]],["f32"]]],[5,"trunc","","",N,[[["f64"]],["f64"]]],[5,"truncf","","",N,[[["f32"]],["f32"]]],[8,"F32Ext","","Math support for `f32`",N,N],[10,"floor","","",0,[[["self"]],["self"]]],[10,"ceil","","",0,[[["self"]],["self"]]],[10,"round","","",0,[[["self"]],["self"]]],[10,"trunc","","",0,[[["self"]],["self"]]],[10,"fdim","","",0,[[["self"],["self"]],["self"]]],[10,"fract","","",0,[[["self"]],["self"]]],[10,"abs","","",0,[[["self"]],["self"]]],[10,"mul_add","","",0,[[["self"],["self"],["self"]],["self"]]],[10,"div_euc","","",0,[[["self"],["self"]],["self"]]],[10,"mod_euc","","",0,[[["self"],["self"]],["self"]]],[10,"powf","","",0,[[["self"],["self"]],["self"]]],[10,"sqrt","","",0,[[["self"]],["self"]]],[10,"exp","","",0,[[["self"]],["self"]]],[10,"exp2","","",0,[[["self"]],["self"]]],[10,"ln","","",0,[[["self"]],["self"]]],[10,"log","","",0,[[["self"],["self"]],["self"]]],[10,"log2","","",0,[[["self"]],["self"]]],[10,"log10","","",0,[[["self"]],["self"]]],[10,"cbrt","","",0,[[["self"]],["self"]]],[10,"hypot","","",0,[[["self"],["self"]],["self"]]],[10,"sin","","",0,[[["self"]],["self"]]],[10,"cos","","",0,[[["self"]],["self"]]],[10,"tan","","",0,[[["self"]],["self"]]],[10,"asin","","",0,[[["self"]],["self"]]],[10,"acos","","",0,[[["self"]],["self"]]],[10,"atan","","",0,[[["self"]],["self"]]],[10,"atan2","","",0,[[["self"],["self"]],["self"]]],[11,"sin_cos","","",0,N],[10,"exp_m1","","",0,[[["self"]],["self"]]],[10,"ln_1p","","",0,[[["self"]],["self"]]],[10,"sinh","","",0,[[["self"]],["self"]]],[10,"cosh","","",0,[[["self"]],["self"]]],[10,"tanh","","",0,[[["self"]],["self"]]],[10,"asinh","","",0,[[["self"]],["self"]]],[10,"acosh","","",0,[[["self"]],["self"]]],[10,"atanh","","",0,[[["self"]],["self"]]],[8,"F64Ext","","Math support for `f64`",N,N],[10,"floor","","",1,[[["self"]],["self"]]],[10,"ceil","","",1,[[["self"]],["self"]]],[10,"round","","",1,[[["self"]],["self"]]],[10,"trunc","","",1,[[["self"]],["self"]]],[10,"fdim","","",1,[[["self"],["self"]],["self"]]],[10,"fract","","",1,[[["self"]],["self"]]],[10,"abs","","",1,[[["self"]],["self"]]],[10,"mul_add","","",1,[[["self"],["self"],["self"]],["self"]]],[10,"div_euc","","",1,[[["self"],["self"]],["self"]]],[10,"mod_euc","","",1,[[["self"],["self"]],["self"]]],[10,"powf","","",1,[[["self"],["self"]],["self"]]],[10,"sqrt","","",1,[[["self"]],["self"]]],[10,"exp","","",1,[[["self"]],["self"]]],[10,"exp2","","",1,[[["self"]],["self"]]],[10,"ln","","",1,[[["self"]],["self"]]],[10,"log","","",1,[[["self"],["self"]],["self"]]],[10,"log2","","",1,[[["self"]],["self"]]],[10,"log10","","",1,[[["self"]],["self"]]],[10,"cbrt","","",1,[[["self"]],["self"]]],[10,"hypot","","",1,[[["self"],["self"]],["self"]]],[10,"sin","","",1,[[["self"]],["self"]]],[10,"cos","","",1,[[["self"]],["self"]]],[10,"tan","","",1,[[["self"]],["self"]]],[10,"asin","","",1,[[["self"]],["self"]]],[10,"acos","","",1,[[["self"]],["self"]]],[10,"atan","","",1,[[["self"]],["self"]]],[10,"atan2","","",1,[[["self"],["self"]],["self"]]],[11,"sin_cos","","",1,N],[10,"exp_m1","","",1,[[["self"]],["self"]]],[10,"ln_1p","","",1,[[["self"]],["self"]]],[10,"sinh","","",1,[[["self"]],["self"]]],[10,"cosh","","",1,[[["self"]],["self"]]],[10,"tanh","","",1,[[["self"]],["self"]]],[10,"asinh","","",1,[[["self"]],["self"]]],[10,"acosh","","",1,[[["self"]],["self"]]],[10,"atanh","","",1,[[["self"]],["self"]]]],"paths":[[8,"F32Ext"],[8,"F64Ext"]]};
searchIndex["nodrop"]={"doc":"The nodrop crate has the following cargo feature flags:","items":[[3,"NoDrop","nodrop","A type holding T that will not call its destructor on drop",N,N],[11,"new","","Create a new NoDrop.",0,[[["t"]],["nodrop"]]],[11,"into_inner","","Extract the inner value.",0,[[["self"]],["t"]]],[11,"drop","","",0,[[["self"]]]],[11,"deref","","",0,[[["self"]],["t"]]],[11,"deref_mut","","",0,[[["self"]],["t"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]]],"paths":[[3,"NoDrop"]]};
initSearch(searchIndex);
