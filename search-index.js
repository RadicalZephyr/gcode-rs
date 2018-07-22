var searchIndex = {};
searchIndex["arrayvec"] = {"doc":"arrayvec provides the types `ArrayVec` and `ArrayString`:  array-backed vector and string types, which store their contents inline.","items":[[3,"ArrayString","arrayvec","A string with a fixed capacity.",null,null],[3,"CapacityError","","Error value indicating insufficient capacity",null,null],[3,"ArrayVec","","A vector with a fixed capacity.",null,null],[3,"IntoIter","","By-value iterator for `ArrayVec`.",null,null],[3,"Drain","","A draining iterator for `ArrayVec`.",null,null],[11,"default","","Return an empty `ArrayString`",0,{"inputs":[],"output":{"name":"arraystring"}}],[11,"new","","Create a new empty `ArrayString`.",0,{"inputs":[],"output":{"name":"arraystring"}}],[11,"from","","Create a new `ArrayString` from a `str`.",0,{"inputs":[{"name":"str"}],"output":{"generics":["capacityerror"],"name":"result"}}],[11,"from_byte_string","","Create a new `ArrayString` from a byte string literal.",0,{"inputs":[{"name":"a"}],"output":{"generics":["utf8error"],"name":"result"}}],[11,"capacity","","Return the capacity of the `ArrayString`.",0,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_full","","Return if the `ArrayString` is completely filled.",0,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"push","","Adds the given char to the end of the string.",0,{"inputs":[{"name":"self"},{"name":"char"}],"output":null}],[11,"try_push","","Adds the given char to the end of the string.",0,{"inputs":[{"name":"self"},{"name":"char"}],"output":{"generics":["capacityerror"],"name":"result"}}],[11,"push_str","","Adds the given string slice to the end of the string.",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":null}],[11,"try_push_str","","Adds the given string slice to the end of the string.",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["capacityerror"],"name":"result"}}],[11,"pop","","Removes the last character from the string and returns it.",0,{"inputs":[{"name":"self"}],"output":{"generics":["char"],"name":"option"}}],[11,"truncate","","Shortens this `ArrayString` to the specified length.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"remove","","Removes a `char` from this `ArrayString` at a byte position and returns it.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"char"}}],[11,"clear","","Make the string empty.",0,{"inputs":[{"name":"self"}],"output":null}],[11,"set_len","","Set the strings’s length.",0,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"as_str","","Return a string slice of the whole `ArrayString`.",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"deref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"hash","","",0,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"borrow","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"as_ref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"write_char","","",0,{"inputs":[{"name":"self"},{"name":"char"}],"output":{"name":"result"}}],[11,"write_str","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"arraystring"}}],[11,"clone_from","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"le","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"gt","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"ge","","",0,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"name":"bool"}}],[11,"cmp","","",0,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"ordering"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"capacityerror"}}],[11,"cmp","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"ordering"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"partial_cmp","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"le","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"gt","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"ge","","",1,{"inputs":[{"name":"self"},{"name":"capacityerror"}],"output":{"name":"bool"}}],[11,"new","","Create a new `CapacityError` from `element`.",1,{"inputs":[{"name":"t"}],"output":{"name":"capacityerror"}}],[11,"element","","Extract the overflowing element",1,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"simplify","","Convert into a `CapacityError` that does not carry an element.",1,{"inputs":[{"name":"self"}],"output":{"name":"capacityerror"}}],[11,"description","","",1,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[8,"Array","","Trait for fixed size arrays.",null,null],[16,"Item","","The array’s element type",2,null],[8,"RangeArgument","","`RangeArgument` is implemented by Rust's built-in range types, produced by range syntax like `..`, `a..`, `..b` or `c..d`.",null,null],[11,"start","","Start index (inclusive)",3,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"option"}}],[11,"end","","End index (exclusive)",3,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"option"}}],[11,"drop","","",4,{"inputs":[{"name":"self"}],"output":null}],[11,"new","","Create a new empty `ArrayVec`.",4,{"inputs":[],"output":{"name":"arrayvec"}}],[11,"len","","Return the number of elements in the `ArrayVec`.",4,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"capacity","","Return the capacity of the `ArrayVec`.",4,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"is_full","","Return if the `ArrayVec` is completely filled.",4,{"inputs":[{"name":"self"}],"output":{"name":"bool"}}],[11,"push","","Push `element` to the end of the vector.",4,null],[11,"try_push","","Push `element` to the end of the vector.",4,null],[11,"push_unchecked","","Push `element` to the end of the vector without checking the capacity.",4,null],[11,"insert","","Insert `element` at position `index`.",4,null],[11,"try_insert","","Insert `element` at position `index`.",4,null],[11,"pop","","Remove the last element in the vector and return it.",4,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"swap_remove","","Remove the element at `index` and swap the last element into its place.",4,null],[11,"swap_pop","","Remove the element at `index` and swap the last element into its place.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"remove","","Remove the element at `index` and shift down the following elements.",4,null],[11,"pop_at","","Remove the element at `index` and shift down the following elements.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":{"name":"option"}}],[11,"truncate","","Shortens the vector, keeping the first `len` elements and dropping the rest.",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"clear","","Remove all elements in the vector.",4,{"inputs":[{"name":"self"}],"output":null}],[11,"retain","","Retains only the elements specified by the predicate.",4,{"inputs":[{"name":"self"},{"name":"f"}],"output":null}],[11,"set_len","","Set the vector’s length without dropping or moving out elements",4,{"inputs":[{"name":"self"},{"name":"usize"}],"output":null}],[11,"drain","","Create a draining iterator that removes the specified range in the vector and yields the removed items from start to end. The element range is removed even if the iterator is not consumed until the end.",4,{"inputs":[{"name":"self"},{"name":"r"}],"output":{"name":"drain"}}],[11,"into_inner","","Return the inner fixed size array, if it is full to its capacity.",4,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"dispose","","Dispose of `self` without the overwriting that is needed in Drop.",4,{"inputs":[{"name":"self"}],"output":null}],[11,"as_slice","","Return a slice containing all elements of the vector.",4,null],[11,"as_mut_slice","","Return a mutable slice containing all elements of the vector.",4,null],[11,"deref","","",4,null],[11,"deref_mut","","",4,null],[11,"from","","",4,{"inputs":[{"name":"a"}],"output":{"name":"self"}}],[11,"into_iter","","",4,{"inputs":[{"name":"self"}],"output":{"name":"intoiter"}}],[11,"next","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"next_back","","",5,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"drop","","",5,{"inputs":[{"name":"self"}],"output":null}],[11,"next","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"next_back","","",6,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"drop","","",6,{"inputs":[{"name":"self"}],"output":null}],[11,"extend","","",4,{"inputs":[{"name":"self"},{"name":"t"}],"output":null}],[11,"from_iter","","",4,{"inputs":[{"name":"t"}],"output":{"name":"self"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"self"}}],[11,"clone_from","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":null}],[11,"hash","","",4,{"inputs":[{"name":"self"},{"name":"h"}],"output":null}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"eq","","",4,null],[11,"borrow","","",4,null],[11,"borrow_mut","","",4,null],[11,"as_ref","","",4,null],[11,"as_mut","","",4,null],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","Return an empty array",4,{"inputs":[],"output":{"name":"arrayvec"}}],[11,"partial_cmp","","",4,{"inputs":[{"name":"self"},{"name":"arrayvec"}],"output":{"generics":["ordering"],"name":"option"}}],[11,"lt","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"le","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"ge","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"gt","","",4,{"inputs":[{"name":"self"},{"name":"self"}],"output":{"name":"bool"}}],[11,"cmp","","",4,{"inputs":[{"name":"self"},{"name":"arrayvec"}],"output":{"name":"ordering"}}],[11,"write","","",4,null],[11,"flush","","",4,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"start","","Start index (inclusive)",3,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"option"}}],[11,"end","","End index (exclusive)",3,{"inputs":[{"name":"self"}],"output":{"generics":["usize"],"name":"option"}}]],"paths":[[3,"ArrayString"],[3,"CapacityError"],[8,"Array"],[8,"RangeArgument"],[3,"ArrayVec"],[3,"IntoIter"],[3,"Drain"]]};
searchIndex["cfg_if"] = {"doc":"A macro for defining `#[cfg]` if-else statements.","items":[[14,"cfg_if","cfg_if","",null,null]],"paths":[]};
searchIndex["gcode"] = {"doc":"A gcode parsing library designed for `no_std` environments.","items":[[3,"Parser","gcode","A gcode parser which is extremely permissive in what input it will accept.",null,null],[3,"Gcode","","A single command in the `gcode` programming language.",null,null],[3,"Word","","A single `Word` in the `gcode` language (e.g. `X-12.3`).",null,null],[12,"letter","","The letter associated with this word (e.g. the `X` in `X12.3`).",0,null],[12,"value","","The numeric part of the word.",0,null],[12,"span","","The word's location in its original text.",0,null],[3,"Span","","A set of byte indices which correspond to the location of a substring in a larger piece of text.",null,null],[12,"start","","The starting index.",1,null],[12,"end","","The index one past the end of the selected text.",1,null],[12,"source_line","","Which line (zero indexed) does the text start on?",1,null],[4,"Mnemonic","","A general command category.",null,null],[13,"ProgramNumber","","A program number (`O555`).",2,null],[13,"ToolChange","","A tool change command (`T6`).",2,null],[13,"MachineRoutine","","A machine-specific routine (`M3`).",2,null],[13,"General","","A general command (`G01`).",2,null],[5,"parse","","Parse a string of text into a stream of `Gcode`s.",null,{"inputs":[{"name":"str"}],"output":{"name":"parser"}}],[11,"fmt","","",3,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"self"}],"output":{"name":"parser"}}],[11,"next","","",3,{"inputs":[{"name":"self"}],"output":{"name":"option"}}],[11,"fmt","","",4,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",4,{"inputs":[],"output":{"name":"gcode"}}],[11,"clone","","",4,{"inputs":[{"name":"self"}],"output":{"name":"gcode"}}],[11,"eq","","",4,{"inputs":[{"name":"self"},{"name":"gcode"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"self"},{"name":"gcode"}],"output":{"name":"bool"}}],[11,"new","","Create a new `Gcode`.",4,{"inputs":[{"name":"mnemonic"},{"name":"f32"},{"name":"span"}],"output":{"name":"gcode"}}],[11,"mnemonic","","Get the `Mnemonic` used by this `Gcode`.",4,{"inputs":[{"name":"self"}],"output":{"name":"mnemonic"}}],[11,"span","","Get the location of this `Gcode` in the original text.",4,{"inputs":[{"name":"self"}],"output":{"name":"span"}}],[11,"args","","The arguments provided to the `Gcode`.",4,null],[11,"line_number","","Get the line number given to this gode (e.g. the `20` in `N20 G04 P100`).",4,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"option"}}],[11,"number","","The number associated with this `Gcode` (e.g. the `01` in `G01 X123`).",4,{"inputs":[{"name":"self"}],"output":{"name":"f32"}}],[11,"major_number","","The integral part of the `Gcode`'s number field.",4,{"inputs":[{"name":"self"}],"output":{"name":"u32"}}],[11,"minor_number","","Any number after the decimal point.",4,{"inputs":[{"name":"self"}],"output":{"generics":["u32"],"name":"option"}}],[11,"add_argument","","Add an argument to this `Gcode`'s argument list.",4,{"inputs":[{"name":"self"},{"name":"word"}],"output":null}],[11,"with_argument","","A builder method for adding an argument to the `Gcode`.",4,{"inputs":[{"name":"self"},{"name":"word"}],"output":{"name":"self"}}],[11,"with_line_number","","A builder method for attaching a line number (the `30` in `N30 G01 X32`) to a command.",4,{"inputs":[{"name":"self"},{"name":"u32"},{"name":"span"}],"output":{"name":"self"}}],[11,"value_for","","Find the value for the desired argument.",4,{"inputs":[{"name":"self"},{"name":"char"}],"output":{"generics":["f32"],"name":"option"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[],"output":{"name":"word"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"word"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"word"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"word"}],"output":{"name":"bool"}}],[11,"new","","Create a new `Word`.",0,{"inputs":[{"name":"char"},{"name":"f32"},{"name":"span"}],"output":{"name":"word"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"self"}],"output":{"name":"mnemonic"}}],[11,"eq","","",2,{"inputs":[{"name":"self"},{"name":"mnemonic"}],"output":{"name":"bool"}}],[11,"hash","","",2,null],[11,"default","","",2,{"inputs":[],"output":{"name":"mnemonic"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[],"output":{"name":"span"}}],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"span"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"span"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"self"},{"name":"span"}],"output":{"name":"bool"}}],[11,"hash","","",1,null],[11,"new","","Create a new `Span`.",1,{"inputs":[{"name":"usize"},{"name":"usize"},{"name":"usize"}],"output":{"name":"span"}}],[11,"merge","","Get the union of two spans.",1,{"inputs":[{"name":"self"},{"name":"span"}],"output":{"name":"span"}}],[11,"len","","The number of bytes within this span.",1,{"inputs":[{"name":"self"}],"output":{"name":"usize"}}],[11,"selected_text","","Given the original text, retrieve the substring this `Span` corresponds to.",1,{"inputs":[{"name":"self"},{"name":"str"}],"output":{"generics":["str"],"name":"option"}}],[0,"ffi","","A FFI interface to the `gcode` library.",null,null],[5,"parser_new","gcode::ffi","Create a new parser.",null,null],[5,"parser_next","","Get the next `Gcode`, returning `false` when there are no more `Gcode`s in the input.",null,null],[5,"gcode_mnemonic","","The overall category this `Gcode` belongs to.",null,null],[5,"gcode_number","","",null,null],[5,"gcode_major_number","","",null,null],[5,"gcode_num_args","","The number of arguments in this `Gcode`.",null,null],[5,"gcode_args","","Get a pointer to this `Gcode`'s arguments.",null,null],[5,"gcode_arg_value","","Get the value for the argument with a particular letter.",null,null],[5,"gcode_span","","The `Gcode`'s location in its source code.",null,null],[5,"gcode_line_number","","Get a `Gcode`'s line number (the `N20` argument), if it was assigned.",null,null],[17,"SIZE_OF_PARSER","","",null,null],[17,"SIZE_OF_GCODE","","",null,null],[17,"MAX_ARGS","gcode","The maximum number of arguments a `Gcode` can have.",null,null]],"paths":[[3,"Word"],[3,"Span"],[4,"Mnemonic"],[3,"Parser"],[3,"Gcode"]]};
searchIndex["nodrop"] = {"doc":"The nodrop crate has the following cargo feature flags:","items":[[3,"NoDrop","nodrop","A type holding T that will not call its destructor on drop",null,null],[11,"new","","Create a new NoDrop.",0,{"inputs":[{"name":"t"}],"output":{"name":"nodrop"}}],[11,"into_inner","","Extract the inner value.",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"drop","","",0,{"inputs":[{"name":"self"}],"output":null}],[11,"deref","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}],[11,"deref_mut","","",0,{"inputs":[{"name":"self"}],"output":{"name":"t"}}]],"paths":[[3,"NoDrop"]]};
initSearch(searchIndex);
