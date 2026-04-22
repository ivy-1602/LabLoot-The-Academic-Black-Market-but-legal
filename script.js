// ══════════════════════════════════════════
// PRODUCT DATA
// Pricing: Notes ₹799–₹899 | Labs ₹899–₹1,099 | Notes Bundle ₹2,999–₹3,499 | Labs Bundle ₹1,999–₹2,499 | Full Bundle ₹3,999–₹4,999
// ══════════════════════════════════════════
const PRODUCTS = [

// ─── CS SEM 3 — NOTES ───
{id:'n-dm',branch:'CS',sem:3,type:'notes',code:'210241',
 name:'Discrete Mathematics — Complete Notes',
 tagline:'"Set theory, graphs, trees, counting, algebra — all 6 units. 50+ solved examples. Crafted to survive the ESE."',
 badge:'trending',
 price:799,mrp:1499,
 contents:['6 Units','Theorems & Proofs','50+ Solved Examples','PYQ Analysis','Quick Revision Sheets'],
 includes:['Unit I — Set Theory & Propositional Logic (naïve sets, inclusion-exclusion, induction)','Unit II — Relations & Functions (Hasse diagrams, lattices, Warshall\'s algorithm)','Unit III — Counting Principles (permutations, combinations, binomial identities)','Unit IV — Graph Theory (Dijkstra, Euler/Hamilton paths, graph colouring)','Unit V — Trees (BST, Huffman coding, spanning trees, Kruskal, Prim)','Unit VI — Algebraic Structures (groups, rings, fields, coding theory)','50+ solved numerical examples with step-by-step working','All theorem proofs in exam-ready format','PYQ analysis & important question classification','Quick revision sheet — 2 pages per unit'],
 exam:{cce:30,ese:70}},

{id:'n-fds',branch:'CS',sem:3,type:'notes',code:'210242',
 name:'Fundamentals of Data Structures — Complete Notes',
 tagline:'"Arrays to queues. Sorting to recursion. All 6 units with complexity analysis. Your CCS prep ends here."',
 badge:'hot',
 price:799,mrp:1499,
 contents:['6 Units','Algorithms','Complexity Tables','PYQ Analysis','Cheat Sheet'],
 includes:['Unit I — Algorithms & ADT (Big-O, Theta, Omega, step-count method)','Unit II — Arrays & Sequential Org (sparse matrix, polynomial ops, address calc)','Unit III — Searching & Sorting (Binary, Fibonacci, Quick, Radix, Bucket sort)','Unit IV — Linked Lists (singly, doubly, circular, generalised linked list)','Unit V — Stacks (expression evaluation, infix→postfix, recursion, backtracking)','Unit VI — Queues (circular queue, priority queue, deque, multi-queue)','All sorting algorithms with time/space complexity comparison table','Pseudocode for every data structure operation','PYQ + MCQ set for CCS preparation','Quick revision cheat sheet'],
 exam:{cce:30,ese:70}},

{id:'n-oop',branch:'CS',sem:3,type:'notes',code:'210243',
 name:'OOP in C++ — Complete Notes',
 tagline:'"Classes to STL. Templates, exception handling, polymorphism. Every unit, every concept. ESE-ready."',
 badge:'new',
 price:799,mrp:1499,
 contents:['6 Units','C++ Programs','Class Diagrams','Viva Q&A','PYQ Solved'],
 includes:['Unit I — OOP Fundamentals (namespaces, classes, constructors, static members, inline)','Unit II — Inheritance & Pointers (virtual base class, abstract class, this pointer, new/delete)','Unit III — Polymorphism (operator overloading, run-time poly, pure virtual, vtable)','Unit IV — Files & Streams (stream classes, file pointers, insertion/extraction overloading)','Unit V — Exception Handling & Templates (try/catch/throw, function & class templates)','Unit VI — STL (containers, iterators, algorithms — vector, list, set, map)','Complete C++ programs for every concept','Class hierarchy diagrams with explanation','Common viva + interview questions answered','SPPU PYQ solved with model answers'],
 exam:{cce:30,ese:70}},

{id:'n-cg',branch:'CS',sem:3,type:'notes',code:'210244',
 name:'Computer Graphics — Complete Notes',
 tagline:'"DDA, Bresenham, clipping, transformations, shading, fractals. The visual subject — finally explained visually."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','Diagrams','Solved Numericals','Algorithm Traces','PYQ Solved'],
 includes:['Unit I — Graphics Primitives (DDA, Bresenham line/circle, scan conversion, OpenGL intro)','Unit II — Polygon, Windowing & Clipping (Cohen-Sutherland, Sutherland-Hodgeman)','Unit III — 2D & 3D Transformations (homogeneous coords, rotation about arbitrary axis, projections)','Unit IV — Light, Colour & Shading (RGB/HSV/CMY, Phong model, Gouraud/Phong shading, z-buffer)','Unit V — Curves & Fractals (Bezier, B-Spline, Koch snowflake, Hilbert curve)','Unit VI — Animation & Gaming (key-frame, morphing, motion specification, gaming platforms)','Step-by-step numericals: DDA, Bresenham, transformation matrices','Clipping algorithm trace examples','OpenGL code snippets for lab context','PYQ solved with diagrams'],
 exam:{cce:30,ese:70}},

{id:'n-de',branch:'CS',sem:3,type:'notes',code:'210245',
 name:'Digital Electronics & Logic Design — Complete Notes',
 tagline:'"K-maps, flip-flops, counters, PLDs, ASM charts. All 6 units. No IC left unsolved."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','Circuit Diagrams','Truth Tables','K-Map Examples','PYQ Solved'],
 includes:['Unit I — Minimization (K-map up to 4 vars, Quine-McCluskey, SOP/POS minimization)','Unit II — Combinational Logic (adders, subtractors, MUX/DEMUX, comparators, parity)','Unit III — Sequential Logic (SR/JK/D/T flip-flops, registers, counters, Mealy/Moore)','Unit IV — ASM & PLDs (FSM, ASM charts, ROM/PLA/PAL design)','Unit V — Logic Families (TTL, CMOS, fan-in/out, noise margin, propagation delay)','Unit VI — Computer Architecture (ALU 74181, microprocessor block diagram, memory organisation)','K-map solved examples (SOP and POS both)','All flip-flop truth tables + excitation tables','IC pin diagrams (7483, 74151, 74138, 7490)','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 3 — LABS ───
{id:'l-dsa3',branch:'CS',sem:3,type:'lab',code:'210246',
 name:'Data Structures Lab — 13 Assignments',
 tagline:'"All 13 assignments solved. Python + C++. Arrays, sorting, BST, linked lists, stacks, queues. Download and breathe."',
 badge:'hot',price:899,mrp:1699,
 contents:['13 Programs','Python + C++','Cover Page','Index Format','Sample Output','Viva Q&A 30+','Flowcharts'],
 includes:['All 13 assignments (Groups A–E) fully solved','Python programs — arrays, sorting, searching, recursion','C++ programs — linked lists, stack, queue, BST','Cover page — SPPU format, ready to fill and print','Index page template — properly numbered','Sample output screenshots (real outputs)','Algorithm & flowchart for each assignment','Viva Q&A — 30+ questions with model answers','Certificate page format','Handwritten write-up guide per assignment'],
 exam:{cce:25,ese:25}},

{id:'l-oop3',branch:'CS',sem:3,type:'lab',code:'210247',
 name:'OOP & Computer Graphics Lab Pack',
 tagline:'"7 assignments. Java + C++ + OpenGL. Operator overloading, inheritance, DDA, transformations, fractals. All done."',
 badge:'new',price:899,mrp:1699,
 contents:['7 Assignments','Java + C++ + OpenGL','Cover Page','Sample Output','Viva Q&A 25+','Index'],
 includes:['Complex number class (operator overloading)','Student database (constructors, destructor, this pointer)','Publication hierarchy (multilevel inheritance)','File I/O assignment with exception handling','Template-based sort (function templates)','DDA + Bresenham circle/line programs (OpenGL)','2D transformations — rotation, scaling, translation','Snowflake fractal (Koch/Hilbert curve)','Bouncing ball / animation OpenGL','Cover page + index + viva Q&A (25+ Q)'],
 exam:{cce:25,ese:25}},

{id:'l-de3',branch:'CS',sem:3,type:'lab',code:'210248',
 name:'Digital Electronics Lab — 12 Experiments',
 tagline:'"Full adder, flip-flop conversions, counters, sequence detectors. Circuit diagrams. Truth tables. All done."',
 badge:'',price:899,mrp:1699,
 contents:['12 Experiments','Circuit Diagrams','Truth Tables','Cover Page','Viva Q&A','Index'],
 includes:['Full adder/subtractor (basic + universal gates)','Code converters (BCD, Gray, Excess-3)','BCD adder using IC 7483','MUX 74151/74153 — Boolean expression realisation','2-bit comparator using logic gates','Parity generator/checker using EX-OR','Flip-flop conversion (JK→D, D→T, JK→T)','Ripple counter 2-bit & 3-bit','Synchronous Up/Down counter design','Sequence detector using Master-Slave JK flip-flop','Circuit diagrams + IC pin configurations for all','Cover page + index + viva Q&A'],
 exam:{cce:25,ese:0}},

// ─── CS SEM 3 — COMBOS ───
{id:'c-ce3-notes',branch:'CS',sem:3,type:'combo',code:'BUNDLE-CS3-N',
 name:'CS Sem 3 — Notes Bundle (All 5 Subjects)',
 tagline:'"Discrete Maths + FDS + OOP + CG + Digital Electronics. All 5 theory subjects in one download."',
 badge:'combo',price:2999,mrp:7495,
 contents:['5 Notes PDFs','30 Units Total','150+ Solved Examples','PYQ Solved All','Quick Revision Sheets'],
 includes:['📒 Discrete Mathematics — Complete Notes (210241)','📒 Fundamentals of Data Structures — Complete Notes (210242)','📒 OOP in C++ — Complete Notes (210243)','📒 Computer Graphics — Complete Notes (210244)','📒 Digital Electronics & Logic Design — Complete Notes (210245)','All 30 units covered across 5 subjects','150+ solved examples and numericals','PYQ analysis and important questions for all subjects','Quick revision cheat sheets — 2 pages per unit','SPPU 2019 pattern — CS Sem 3'],
 exam:{cce:30,ese:70}},

{id:'c-ce3-labs',branch:'CS',sem:3,type:'combo',code:'BUNDLE-CS3-L',
 name:'CS Sem 3 — Labs Bundle (All 3 Labs)',
 tagline:'"DSA Lab (13) + OOP & CG Lab (7) + DE Lab (12). Every experiment. All 32 programs. One pack."',
 badge:'combo',price:1999,mrp:5097,
 contents:['32 Programs Total','Cover Pages x3','Viva Q&A 80+','Sample Outputs','Flowcharts All','Index Formats'],
 includes:['🧪 Data Structures Lab — 13 assignments Python + C++','🧪 OOP & Computer Graphics Lab — 7 assignments Java/C++/OpenGL','🧪 Digital Electronics Lab — 12 experiments with circuit diagrams','All cover pages, index formats, certificate page formats','Viva Q&A for all 3 labs — 80+ questions with model answers','Sample output screenshots for all programs','Algorithm & flowchart for every assignment'],
 exam:{cce:25,ese:25}},

{id:'c-ce3-full',branch:'CS',sem:3,type:'combo',code:'BUNDLE-CS3-FULL',
 name:'CS Sem 3 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"5 notes + 3 labs. Everything for Sem 3. ₹3,999 instead of ₹12,592. Your wallet said thank you."',
 badge:'hot',price:3999,mrp:12592,
 contents:['5 Notes PDFs','3 Lab Packs','Viva Q&A 80+','Cover Pages All','PYQ Solved','Full Sem Coverage'],
 includes:['📒 Discrete Mathematics — Complete Notes','📒 FDS — Complete Notes','📒 OOP in C++ — Complete Notes','📒 Computer Graphics — Complete Notes','📒 Digital Electronics — Complete Notes','🧪 DSA Lab Pack — 13 assignments','🧪 OOP & CG Lab Pack — 7 assignments','🧪 DE Lab Pack — 12 experiments','All cover pages, index formats, certificate pages','Viva Q&A for all labs (80+ questions)','SPPU 2019 CS Sem 3 — complete'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 4 — NOTES ───
{id:'n-em3',branch:'CS',sem:4,type:'notes',code:'207003',
 name:'Engineering Mathematics III — Complete Notes',
 tagline:'"LDE, Fourier, Z-transform, statistics, probability, numerical methods. The last maths. Let\'s end it."',
 badge:'hot',price:799,mrp:1499,
 contents:['6 Units','100+ Numericals','Formula Sheet','Theorem Proofs','PYQ Solved'],
 includes:['Unit I — LDE (complementary function, particular integral, variation of parameters)','Unit II — Transforms (Fourier series, Fourier/Z-transform, Discrete Fourier transform)','Unit III — Statistics (mean, median, mode, correlation, regression, curve fitting)','Unit IV — Probability & Distributions (Bayes, Binomial, Poisson, Normal, Chi-square, t-test)','Unit V — Numerical Methods I (Bisection, Newton-Raphson, Gauss elimination, LU decomp)','Unit VI — Numerical Methods II (Newton/Lagrange interpolation, Simpson\'s rule, Runge-Kutta)','100+ solved numericals with step-by-step working','All formulae compiled in one master reference sheet','Theorem proofs in exam-ready format','Previous year SPPU numericals solved'],
 exam:{cce:30,ese:70}},

{id:'n-dsa4',branch:'CS',sem:4,type:'notes',code:'210252',
 name:'Data Structures & Algorithms — Complete Notes',
 tagline:'"Hashing, AVL, Red-Black, graphs, B-trees, file org. Sem 4 DSA — the harder sibling."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','Tree Diagrams','Algorithm Traces','Complexity Analysis','PYQ Solved'],
 includes:['Unit I — Hashing (hash functions, collision resolution, extendible hashing, skip lists)','Unit II — Trees (BST, threaded BST, Huffman tree, traversals recursive/non-recursive)','Unit III — Graphs (DFS/BFS, Prim, Kruskal, Dijkstra, Floyd-Warshall, topological sort)','Unit IV — Search Trees (OBST dynamic programming, AVL, Red-Black, Splay, K-d trees)','Unit V — Indexing & Multiway Trees (B-Tree, B+Tree insertion/deletion, Trie)','Unit VI — File Organisation (sequential, direct access, indexed sequential, linked organisation)','Full tree insertion/deletion examples with step diagrams','Graph algorithm trace examples','B-tree and B+tree insertion step-by-step','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-se',branch:'CS',sem:4,type:'notes',code:'210253',
 name:'Software Engineering — Complete Notes',
 tagline:'"SDLC, UML, SRS, COCOMO, risk management, testing. 70% diagrams, 30% common sense."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','UML Diagrams','SRS Template','COCOMO Examples','PYQ Solved'],
 includes:['Unit I — Software Process Models (Waterfall, incremental, spiral, agile, Scrum)','Unit II — Requirements Engineering (use cases, SRS IEEE format, stakeholder analysis)','Unit III — Estimation & Scheduling (LOC, FP, COCOMO II, Gantt charts, RTM)','Unit IV — Design Engineering (abstraction, modularity, cohesion/coupling, architectural styles)','Unit V — Risk & Configuration Mgmt (RMMM plan, SCM process, version control concepts)','Unit VI — Software Testing (unit, integration, validation, OO testing, Selenium)','Complete UML diagrams — use case, class, sequence, activity, state','Sample SRS document (IEEE 830 format)','COCOMO II worked examples','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-mp',branch:'CS',sem:4,type:'notes',code:'210254',
 name:'Microprocessor 80386 — Complete Notes',
 tagline:'"80386 architecture, instruction set, memory management, protection rings, multitasking. The suffering — documented."',
 badge:'trending',price:799,mrp:1499,
 contents:['6 Units','Architecture Diagrams','Instruction Set','Memory Maps','PYQ Solved'],
 includes:['Unit I — 80386 Architecture (registers, operating modes, addressing modes, instruction set)','Unit II — Bus Cycles & System Architecture (pin diagram, memory banks, system registers)','Unit III — Memory Management (GDT, LDT, IDT, descriptors, selectors, paging)','Unit IV — Protection (privilege rings, DPL/CPL/RPL, call gates, page-level protection)','Unit V — Multitasking & Virtual Mode (TSS, task switching, task linking, V86 mode)','Unit VI — Interrupts & Microcontrollers (IDT, interrupt procedures, 8051 architecture)','80386 architecture block diagram with full labels','Memory management segment + page translation tables','Protection ring diagram explained clearly','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-ppl',branch:'CS',sem:4,type:'notes',code:'210255',
 name:'PPL — Java + LISP + Prolog — Complete Notes',
 tagline:'"Java OOP, multithreading, LISP, Prolog, paradigms. 4 languages. 6 units. Zero stress."',
 badge:'new',price:799,mrp:1499,
 contents:['6 Units','Java Programs','LISP Reference','Prolog Guide','PYQ Solved'],
 includes:['Unit I — Programming Paradigms (procedural, OOP, functional, logic — history & comparison)','Unit II — Data Structures & Expressions (types, arrays, control statements, subprograms)','Unit III — Java Overview (classes, constructors, strings, arrays, static members, overloading)','Unit IV — Java Inheritance & Exceptions (multilevel hierarchy, interfaces, packages)','Unit V — Java Multithreading (thread lifecycle, synchronisation)','Unit VI — LISP & Prolog (lambda functions, recursion, Prolog syntax, lists, arithmetic)','Complete Java programs for each unit','LISP function reference with examples','Prolog rule-writing guide with practice problems','Paradigm comparison table (all 4 paradigms)'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 4 — LABS ───
{id:'l-dsa4',branch:'CS',sem:4,type:'lab',code:'210256',
 name:'DSA Lab II — Trees, Graphs & Files (12 Assignments)',
 tagline:'"Hashing, AVL, graphs (Dijkstra!), Huffman, B-trees, file org. 12 assignments. Python + Java. All solved."',
 badge:'hot',price:999,mrp:1899,
 contents:['12 Assignments','Python + Java','Graphs & Trees','Cover Page','Viva Q&A 30+','Flowcharts'],
 includes:['Hash table with chaining + open addressing','Skip list implementation','BST operations (insert, delete, search, traversal)','Expression tree (prefix→postfix)','Threaded binary tree (inorder traversal)','Dictionary using BST','Huffman coding file compression','Graph DFS + BFS (adjacency list/matrix)','Minimum spanning tree (Prim + Kruskal)','Dijkstra shortest path algorithm','Sequential + index sequential file organisation','Cover page + index + viva Q&A (30+ Q)'],
 exam:{cce:25,ese:25}},

{id:'l-mp4',branch:'CS',sem:4,type:'lab',code:'210257',
 name:'Microprocessor Lab — x86/64 ALP Pack (10 Programs)',
 tagline:'"10 x86 assembly programs. Hex arithmetic, BCD conversion, string ops, protected mode. NASM + documentation."',
 badge:'',price:999,mrp:1899,
 contents:['10 ALP Programs','x86/64-bit','Cover Page','Viva Q&A','Sample Output','Index'],
 includes:['Accept & display 5 hex numbers using array','String length computation using ALP','Find largest of given numbers','64-bit arithmetic with macros (+, –, ×, ÷)','Count positive & negative numbers','HEX to BCD and BCD to HEX conversion','Detect protected mode (GDTR, LDTR, IDTR inspection)','Non-overlapped block transfer','Overlapped block transfer (string instructions)','8-bit multiplication (successive add + shift method)','Cover page + index + viva Q&A (30+ Q)','Motherboard study assignment documentation'],
 exam:{cce:25,ese:25}},

// ─── CS SEM 4 — COMBOS ───
{id:'c-ce4-notes',branch:'CS',sem:4,type:'combo',code:'BUNDLE-CS4-N',
 name:'CS Sem 4 — Notes Bundle (All 5 Subjects)',
 tagline:'"Engg. Maths III + DSA + SE + Microprocessor + PPL. All 5 theory notes. One download."',
 badge:'combo',price:2999,mrp:7495,
 contents:['5 Notes PDFs','30 Units','100+ Numericals','PYQ All Subjects','Quick Revision'],
 includes:['📒 Engineering Mathematics III — Complete Notes','📒 Data Structures & Algorithms (Advanced) — Complete Notes','📒 Software Engineering — Complete Notes','📒 Microprocessor 80386 — Complete Notes','📒 PPL (Java + LISP + Prolog) — Complete Notes','All 30 units covered','100+ solved numericals (Maths + DSA)','PYQ analysis for all subjects','Quick revision cheat sheets per subject'],
 exam:{cce:30,ese:70}},

{id:'c-ce4-labs',branch:'CS',sem:4,type:'combo',code:'BUNDLE-CS4-L',
 name:'CS Sem 4 — Labs Bundle (Both Labs)',
 tagline:'"DSA Lab II (12 assignments) + Microprocessor Lab (10 x86 programs). Both Sem 4 labs in one pack."',
 badge:'combo',price:1699,mrp:3798,
 contents:['22 Programs','Python + Java + ALP','Viva Q&A 60+','Cover Pages x2','Sample Outputs','Index Both'],
 includes:['🧪 DSA Lab II — 12 assignments Java + Python','🧪 Microprocessor Lab — 10 x86/64 ALP programs','All cover pages, index formats, certificate page formats','Viva Q&A for both labs — 60+ questions','Sample output screenshots for all programs','Flowcharts and algorithms for all assignments'],
 exam:{cce:25,ese:25}},

{id:'c-ce4-full',branch:'CS',sem:4,type:'combo',code:'BUNDLE-CS4-FULL',
 name:'CS Sem 4 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"5 notes + 2 labs. Microprocessor included. Sem 4 done. ₹3,999 instead of ₹11,293."',
 badge:'hot',price:3999,mrp:11293,
 contents:['5 Notes PDFs','2 Lab Packs','ALP Programs','Cover Pages','Viva Q&A 60+','Full Sem Coverage'],
 includes:['📒 Engineering Mathematics III — Complete Notes','📒 DSA Advanced — Complete Notes','📒 Software Engineering — Complete Notes','📒 Microprocessor 80386 — Complete Notes','📒 PPL (Java + LISP + Prolog) — Complete Notes','🧪 DSA Lab II — 12 assignments','🧪 Microprocessor Lab — 10 x86 ALP programs','All cover pages, index formats, certificate pages','Viva Q&A for both labs','SPPU 2019 CS Sem 4 — complete'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 5 — NOTES ───
{id:'n-dbms5',branch:'CS',sem:5,type:'notes',code:'310241',
 name:'DBMS — Complete Notes',
 tagline:'"Relational algebra, SQL from scratch, normalisation, transactions, PL/SQL, NoSQL. The database subject CS actually uses."',
 badge:'hot',price:799,mrp:1499,
 contents:['6 Units','SQL Reference','ER Diagrams','Normalisation','Transaction Problems','PYQ Solved'],
 includes:['Unit I — ER Modeling (entities, relationships, attributes, ER→relational schema mapping)','Unit II — Relational Model & Relational Algebra (SELECT, PROJECT, JOIN, DIVISION)','Unit III — SQL (DDL, DML, joins, subqueries, aggregate functions, views, indexes)','Unit IV — Normalisation (1NF, 2NF, 3NF, BCNF — step-by-step worked examples)','Unit V — Transactions & Concurrency (ACID, serializability, locking protocols, deadlock)','Unit VI — PL/SQL & NoSQL (triggers, stored procedures, cursors, MongoDB, CAP theorem)','Complete SQL command reference card','ER diagram to relational schema conversion examples','Normalisation worked examples (FD sets, decomposition)','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-toc5',branch:'CS',sem:5,type:'notes',code:'310242',
 name:'Theory of Computation — Complete Notes',
 tagline:'"DFA, NFA, CFG, PDAs, Turing machines, decidability, P vs NP. The theoretical subject — made survivable."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','DFA/NFA Constructions','CFG Examples','Pumping Lemma','TM Design','PYQ Solved'],
 includes:['Unit I — Finite Automata (DFA, NFA, ε-NFA, equivalence, minimisation)','Unit II — Regular Expressions & Languages (RE to DFA, Pumping Lemma, closure properties)','Unit III — Context-Free Grammars (CFG, parse trees, ambiguity, CNF, GNF)','Unit IV — Pushdown Automata (PDA, DPDA, CFG↔PDA equivalence, CFL properties)','Unit V — Turing Machines (TM models, variants, Church-Turing thesis, Halting Problem)','Unit VI — Complexity Classes (decidability, P, NP, NP-hard, NP-complete — Cook\'s theorem)','DFA/NFA construction worked examples (step-by-step)','Pumping Lemma proof examples for regular and CFLs','TM design examples for standard languages'],
 exam:{cce:30,ese:70}},

{id:'n-spos5',branch:'CS',sem:5,type:'notes',code:'310243',
 name:'Systems Programming & OS — Complete Notes',
 tagline:'"Assemblers, linkers, loaders, macros, OS scheduling, memory management — SPOS + OS combined and fully covered."',
 badge:'trending',price:799,mrp:1499,
 contents:['6 Units','Assembler Passes','OS Algorithms','Gantt Charts',"Banker's Algo",'PYQ Solved'],
 includes:['Unit I — Language Processors (assembler design, two-pass assembler, symbol table, location counter)','Unit II — Macro Processors (macro definition, expansion, MDT/MNT, ALA)','Unit III — Linkers & Loaders (absolute, relocatable, dynamic linking, relocation, linking steps)','Unit IV — OS Fundamentals & Process Management (process states, PCB, threads, system calls)','Unit V — CPU Scheduling & Synchronisation (FCFS, SJF, RR, semaphores, monitors, deadlock)','Unit VI — Memory Management (paging, segmentation, virtual memory, page replacement, disk scheduling)','Two-pass assembler trace examples with symbol table','CPU scheduling Gantt chart solved examples','Banker\'s algorithm worked problems','Page replacement (FIFO, LRU, Optimal) solved'],
 exam:{cce:30,ese:70}},

{id:'n-cns5',branch:'CS',sem:5,type:'notes',code:'310244',
 name:'Computer Networks & Security — Complete Notes',
 tagline:'"OSI to TCP/IP, routing, transport, application layer + cryptography, firewalls, SSL/TLS. Networks and security — both in one."',
 badge:'new',price:799,mrp:1499,
 contents:['6 Units','Protocol Diagrams','Subnetting Examples','Crypto Algorithms','PYQ Solved'],
 includes:['Unit I — Network Models & Physical Layer (OSI, TCP/IP, encoding, multiplexing, transmission media)','Unit II — Data Link & Network Layer (framing, error detection, IP, subnetting, CIDR, NAT, ICMP)','Unit III — Routing & Transport Layer (RIP, OSPF, BGP, TCP, UDP, flow/congestion control)','Unit IV — Application Layer (DNS, HTTP/HTTPS, SMTP, FTP, DHCP, SNMP)','Unit V — Cryptography (symmetric — DES/AES, asymmetric — RSA, hashing — SHA/MD5, digital signatures)','Unit VI — Network Security (PKI, SSL/TLS, IPSec, firewalls, IDS/IPS, VPN, common attacks)','Subnetting solved examples (VLSM + CIDR)','RSA encryption/decryption worked examples','Protocol comparison tables','PYQ solved'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 5 — LABS ───
{id:'l-lp1',branch:'CS',sem:5,type:'lab',code:'310246',
 name:'LP-1 Lab — SPOS + Distributed Systems (12 Assignments)',
 tagline:'"Assembler Pass 1 & 2, Macro processor, OS scheduling, page replacement, disk scheduling, RPC/socket programming. The big one."',
 badge:'hot',price:999,mrp:1899,
 contents:['12 Assignments','Python + Java','Assembler Code','OS Algorithms','RPC/Sockets','Cover Page','Viva Q&A 35+','Flowcharts'],
 includes:['Pass 1 of Two-pass Assembler (symbol table, location counter)','Pass 2 of Two-pass Assembler (machine code generation)','Macro Processor — definition, expansion, MDT/MNT','CPU Scheduling — FCFS, SJF, Priority, Round Robin (Gantt charts)','Page Replacement — FIFO, LRU, Optimal (with hit/miss table)','Disk Scheduling — FCFS, SSTF, SCAN, C-SCAN','Banker\'s Algorithm — safety check + resource request','Inter-Process Communication — shared memory & message passing','Socket Programming — client-server chat (Java/Python)','RPC Demo — remote procedure call implementation','Distributed Mutual Exclusion — Lamport\'s token ring','Cover page + index + viva Q&A (35+ Q)'],
 exam:{cce:25,ese:25}},

{id:'l-dbms5',branch:'CS',sem:5,type:'lab',code:'310247',
 name:'DBMS Lab — MySQL Practicals (12 Assignments)',
 tagline:'"All DBMS lab assignments — DDL, DML, joins, views, triggers, PL/SQL, cursors, MongoDB. Download, fill roll number, submit."',
 badge:'new',price:899,mrp:1699,
 contents:['12 SQL Practicals','DDL + DML','Joins & Views','Triggers & Procedures','MongoDB','Cover Page','Viva Q&A 30+'],
 includes:['DDL — CREATE, ALTER, DROP with all constraints (PK, FK, NOT NULL, UNIQUE, CHECK)','DML — INSERT, UPDATE, DELETE, SELECT with WHERE/ORDER BY/GROUP BY','SQL Joins — INNER, LEFT, RIGHT, FULL OUTER with real examples','Views, sequences, synonyms, indexes','Aggregate functions — COUNT, SUM, AVG, MIN, MAX with HAVING','Subqueries — correlated and non-correlated','PL/SQL Triggers — BEFORE/AFTER INSERT/UPDATE/DELETE','Stored Procedures & Functions with parameters','Cursors — implicit and explicit, cursor FOR loop','MongoDB — CRUD, find with conditions, aggregation pipeline','Cover page + index format + viva Q&A (30+ Q)','Normalisation mini-assignment (1NF→BCNF)'],
 exam:{cce:25,ese:25}},

{id:'l-cn5',branch:'CS',sem:5,type:'lab',code:'310248',
 name:'Computer Networks Lab — Socket Programming (8 Assignments)',
 tagline:'"Client-server TCP/UDP, HTTP simulation, FTP, DNS resolver, Wireshark analysis, routing table simulation. All 8 done."',
 badge:'',price:899,mrp:1699,
 contents:['8 Programs','TCP + UDP Sockets','HTTP/FTP Sim','DNS Lookup','Wireshark Guide','Cover Page','Viva Q&A 25+'],
 includes:['TCP Echo Client-Server (multi-client with threads)','UDP Client-Server (connectionless datagram exchange)','HTTP GET/POST simulation using raw sockets','FTP client simulation — file transfer over TCP','DNS resolver — query A/MX records using dnspython/socket','Subnetting calculator — CIDR, subnet mask, broadcast address','Routing table simulation — longest prefix matching','Wireshark packet capture + analysis guide (HTTP, DNS, TCP handshake)','Cover page + index + viva Q&A (25+ Q)'],
 exam:{cce:25,ese:25}},

// ─── CS SEM 5 — COMBOS ───
{id:'c-ce5-notes',branch:'CS',sem:5,type:'combo',code:'BUNDLE-CS5-N',
 name:'CS Sem 5 — Notes Bundle (All 4 Subjects)',
 tagline:'"DBMS + TOC + SPOS & OS + CN & Security. All 4 Sem 5 theory notes. One download."',
 badge:'combo',price:2999,mrp:7196,
 contents:['4 Notes PDFs','24 Units','Assembler Traces','Crypto Algorithms','PYQ All','Quick Revision'],
 includes:['📒 DBMS — Complete Notes (SQL, normalisation, PL/SQL, NoSQL)','📒 Theory of Computation — Complete Notes (DFA, CFG, TM, P vs NP)','📒 Systems Programming & OS — Complete Notes (Assembler, linkers, OS algos)','📒 Computer Networks & Security — Complete Notes (TCP/IP, routing, crypto, firewalls)','All 24 units covered','Assembler traces + Banker\'s + RSA worked examples','PYQ analysis for all 4 subjects'],
 exam:{cce:30,ese:70}},

{id:'c-ce5-labs',branch:'CS',sem:5,type:'combo',code:'BUNDLE-CS5-L',
 name:'CS Sem 5 — Labs Bundle (All 3 Labs)',
 tagline:'"LP-1 (SPOS+DS) + DBMS Lab + CN & Security Lab. All 32 assignments. Assembler to MongoDB to sockets — done."',
 badge:'combo',price:1999,mrp:5097,
 contents:['32 Programs Total','Python + Java + SQL','Viva Q&A 90+','Cover Pages x3','Index Formats','Flowcharts All'],
 includes:['🧪 LP-1 Lab — 12 assignments (Assembler, OS algos, Banker\'s, Sockets, RPC)','🧪 DBMS Lab — 12 assignments (DDL/DML, Triggers, PL/SQL, MongoDB)','🧪 CN & Security Lab — 8 assignments (TCP/UDP sockets, HTTP sim, DNS, Wireshark)','All cover pages, index formats, certificate page formats','Viva Q&A for all 3 labs — 90+ questions with model answers','Sample output screenshots for all programs','Algorithms + flowcharts for every assignment'],
 exam:{cce:25,ese:25}},

{id:'c-ce5-full',branch:'CS',sem:5,type:'combo',code:'BUNDLE-CS5-FULL',
 name:'CS Sem 5 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"4 notes + 3 labs. DBMS, TOC, SPOS+OS, CN+Security — theory AND practicals. Sem 5 fully done. ₹3,999."',
 badge:'hot',price:3999,mrp:12293,
 contents:['4 Notes PDFs','3 Lab Packs','32 Programs','Viva Q&A 90+','Cover Pages All','PYQ Solved'],
 includes:['📒 DBMS — Complete Notes','📒 Theory of Computation — Complete Notes','📒 Systems Programming & OS — Complete Notes','📒 Computer Networks & Security — Complete Notes','🧪 LP-1 Lab — Assembler + OS algos + Sockets (12 assignments)','🧪 DBMS Lab — MySQL + PL/SQL + MongoDB (12 assignments)','🧪 CN & Security Lab — Socket programming + Wireshark (8 assignments)','All cover pages, index formats, certificate pages','Viva Q&A for all labs (90+ Q)','SPPU 2019 CS Sem 5 — complete'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 6 — NOTES ───
{id:'n-dsbda6',branch:'CS',sem:6,type:'notes',code:'410241',
 name:'Data Science & Big Data Analytics — Complete Notes',
 tagline:'"Statistics, data preprocessing, ML fundamentals, Hadoop, Spark, visualisation. The subject that\'s actually useful."',
 badge:'hot',price:799,mrp:1499,
 contents:['6 Units','Hadoop Architecture','Spark Intro','Data Viz','ML Basics','PYQ Solved'],
 includes:['Unit I — Introduction to Data Science (data types, data science lifecycle, tools overview)','Unit II — Statistics for Data Science (descriptive stats, probability, distributions, hypothesis testing)','Unit III — Data Preprocessing & Wrangling (missing values, outliers, normalisation, feature engineering)','Unit IV — Data Visualisation & Mining (Matplotlib, Seaborn, clustering, association rules, Apriori)','Unit V — Big Data & Hadoop (HDFS, MapReduce, Hive, Pig, HBase overview)','Unit VI — Spark & Advanced Analytics (Spark RDD/DataFrame, MLlib, real-time streaming, case studies)','Hadoop ecosystem diagram','MapReduce word count worked example','Data preprocessing cheat sheet','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-wt6',branch:'CS',sem:6,type:'notes',code:'410242',
 name:'Web Technology — Complete Notes',
 tagline:'"HTML5, CSS3, JavaScript, PHP, Node.js, REST APIs, databases. Full-stack web dev — theory made clear."',
 badge:'new',price:799,mrp:1499,
 contents:['6 Units','HTML/CSS Reference','JS Concepts','PHP Syntax','Node.js/Express','PYQ Solved'],
 includes:['Unit I — Web Fundamentals (HTTP/HTTPS, client-server model, browsers, web standards)','Unit II — HTML5 & CSS3 (semantic tags, forms, Flexbox, Grid, responsive design, Bootstrap)','Unit III — JavaScript (DOM, events, ES6+, AJAX, JSON, Fetch API, promises)','Unit IV — Server-Side — PHP (syntax, forms, sessions, cookies, file handling, OOP PHP)','Unit V — PHP + MySQL (CRUD, PDO, prepared statements, authentication)','Unit VI — Node.js & Modern Web (Express.js, REST API design, npm, MVC pattern, security)','HTTP request/response diagram','JavaScript event loop explained','REST API design reference','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-ai6',branch:'CS',sem:6,type:'notes',code:'410243',
 name:'Artificial Intelligence — Complete Notes',
 tagline:'"Heuristic search, game theory, knowledge representation, planning, Bayesian reasoning. AI — from theory to application."',
 badge:'trending',price:799,mrp:1499,
 contents:['6 Units','A* Traces','Minimax Trees','Prolog Examples','Bayesian Networks','PYQ Solved'],
 includes:['Unit I — Problem Solving by Search (BFS, DFS, UCS, greedy, A* — heuristics, admissibility)','Unit II — Adversarial Search & Game Theory (minimax, alpha-beta pruning, stochastic games)','Unit III — Knowledge Representation (propositional logic, FOL, inference rules, resolution, unification)','Unit IV — Planning (STRIPS, partial-order planning, planning graphs, situation calculus)','Unit V — Uncertainty & Bayesian Networks (probability theory, Bayes rule, Bayesian networks, inference)','Unit VI — Learning & Expert Systems (ML overview, Prolog, expert system architecture, fuzzy logic)','A* trace with heuristic calculations (8-puzzle + grid examples)','Minimax tree with alpha-beta pruning example','Bayesian network probability problems solved','PYQ solved'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 6 — LABS ───
{id:'l-dsbda6',branch:'CS',sem:6,type:'lab',code:'410243',
 name:'DSBDA Lab — Data Science & Big Data (10 Assignments)',
 tagline:'"Pandas, NumPy, data preprocessing, descriptive stats, visualisation, Hadoop intro — all 10 Python assignments. Notebooks ready."',
 badge:'hot',price:1099,mrp:2099,
 contents:['10 Python Notebooks','Pandas + NumPy','Data Visualisation','Hadoop Intro','Cover Page','Viva Q&A 30+'],
 includes:['Data wrangling with Pandas — missing values, outliers, type conversion','Descriptive statistics — mean, median, variance, IQR, skewness on real dataset','Data visualisation — scatter, histogram, box plot, heatmap (Matplotlib + Seaborn)','Correlation analysis — Pearson/Spearman heatmap','Academic performance dataset analysis (full end-to-end)','Heart disease / Iris dataset — classification preprocessing pipeline','Text preprocessing — tokenisation, stopword removal, TF-IDF','MapReduce word count concept + Hadoop pseudo-mode demo','Hive query — table creation, loading data, querying','Data cube + OLAP operations demo','Cover page + index + viva Q&A (30+ Q)','Jupyter notebook format, ready to print'],
 exam:{cce:25,ese:25}},

{id:'l-wtl6',branch:'CS',sem:6,type:'lab',code:'410244',
 name:'WTL — Web Technologies Lab (10 Assignments)',
 tagline:'"HTML5, CSS3, JavaScript, PHP/Node.js, REST APIs, MySQL backend. All 10 web assignments with source code + screenshots."',
 badge:'new',price:999,mrp:1899,
 contents:['10 Web Projects','HTML + CSS + JS','PHP/Node.js','MySQL Backend','REST API','Cover Page','Viva Q&A 30+'],
 includes:['HTML5 + CSS3 responsive portfolio page (Flexbox/Grid)','JavaScript DOM manipulation — form validation, dynamic table','JavaScript — calculator, to-do list, image slider','PHP form handling — GET/POST, sessions, cookies','PHP + MySQL CRUD — student database with add/edit/delete','Node.js + Express REST API — GET/POST/PUT/DELETE routes','AJAX — async form submit, live search with JSON','Bootstrap 5 responsive website with navbar + cards','XML + JSON parsing examples','jQuery animations + event handling','Cover page + index + viva Q&A (30+ Q)','Full source code with comments'],
 exam:{cce:25,ese:25}},

{id:'l-lp2',branch:'CS',sem:6,type:'lab',code:'410245',
 name:'LP-2 Lab — AI + ML Assignments (10 Assignments)',
 tagline:'"A* search, BFS/DFS, Prolog, expert system, naïve Bayes, KNN, K-Means, regression — LP-2 fully solved."',
 badge:'trending',price:1099,mrp:2099,
 contents:['10 Assignments','Python + Prolog','AI Search Algos','ML Models','Expert System','Cover Page','Viva Q&A 35+'],
 includes:['BFS and DFS graph traversal (Python)','A* search algorithm with heuristic (8-puzzle / grid)','Constraint Satisfaction Problem — N-Queens backtracking','Expert system — simple rule-based diagnosis (Python dict/if-else)','Prolog — family relations, list operations, cut predicate','Naïve Bayes classifier (sklearn + manual implementation)','KNN classifier with accuracy evaluation on Iris dataset','K-Means clustering with elbow method (Python)','Linear regression — predict house price / marks','Decision Tree — ID3 / sklearn on real dataset','Cover page + index + viva Q&A (35+ Q)','Sample outputs + plots for all assignments'],
 exam:{cce:25,ese:25}},

// ─── CS SEM 6 — COMBOS ───
{id:'c-ce6-notes',branch:'CS',sem:6,type:'combo',code:'BUNDLE-CS6-N',
 name:'CS Sem 6 — Notes Bundle (All 3 Subjects)',
 tagline:'"Data Science & Big Data + Web Technology + AI. All 3 Sem 6 theory notes in one pack."',
 badge:'combo',price:1999,mrp:4497,
 contents:['3 Notes PDFs','18 Units','A* Traces','Hadoop Diagrams','JS Reference','PYQ All'],
 includes:['📒 Data Science & Big Data Analytics — Complete Notes','📒 Web Technology — Complete Notes','📒 Artificial Intelligence — Complete Notes','All 18 units covered','Hadoop ecosystem + MapReduce examples','A* trace + Bayesian network problems','PYQ analysis for all 3 subjects'],
 exam:{cce:30,ese:70}},

{id:'c-ce6-labs',branch:'CS',sem:6,type:'combo',code:'BUNDLE-CS6-L',
 name:'CS Sem 6 — Labs Bundle (All 3 Labs)',
 tagline:'"DSBDA (10) + Web Tech Lab (10) + LP-2 AI+ML (10). All 30 assignments. Python + Web + AI. One pack."',
 badge:'combo',price:2499,mrp:6297,
 contents:['30 Assignments','Python + Web + Prolog','Viva Q&A 95+','Cover Pages x3','Jupyter Notebooks','Full Source Code'],
 includes:['🧪 DSBDA Lab — 10 Python data science notebooks (Pandas, NumPy, Hadoop, Hive)','🧪 Web Technology Lab — 10 assignments (HTML/CSS/JS/PHP/Node.js/MySQL)','🧪 LP-2 Lab — 10 AI + ML assignments (A*, Prolog, Naive Bayes, KNN, K-Means)','All cover pages, index formats, certificate pages','Viva Q&A for all 3 labs — 95+ questions','Sample outputs + plots for all assignments'],
 exam:{cce:25,ese:25}},

{id:'c-ce6-full',branch:'CS',sem:6,type:'combo',code:'BUNDLE-CS6-FULL',
 name:'CS Sem 6 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"3 notes + 3 labs. DSBDA, Web Tech, AI — theory AND practicals. Sem 6 completely done. ₹3,999."',
 badge:'hot',price:3999,mrp:10794,
 contents:['3 Notes PDFs','3 Lab Packs','30 Assignments','Viva Q&A 95+','Cover Pages All','PYQ Solved'],
 includes:['📒 Data Science & Big Data Analytics — Complete Notes','📒 Web Technology — Complete Notes','📒 Artificial Intelligence — Complete Notes','🧪 DSBDA Lab — 10 Python notebooks (Pandas, Hadoop, Hive, visualisation)','🧪 Web Tech Lab — 10 assignments (HTML/CSS/JS/PHP/Node.js)','🧪 LP-2 Lab — 10 AI + ML assignments (A*, Prolog, sklearn models)','All cover pages, index formats, certificate pages','Viva Q&A for all labs (95+ Q)','SPPU 2019 CS Sem 6 — complete'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 7 ───
{id:'n-daa7',branch:'CS',sem:7,type:'notes',code:'510241',
 name:'Design & Analysis of Algorithms — Complete Notes',
 tagline:'"Divide & conquer, greedy, DP, backtracking, NP-completeness, approximation. All paradigms traced and solved."',
 badge:'new',price:799,mrp:1499,
 contents:['6 Units','Algorithm Traces','DP Tables','Recurrence Solutions','NP Proofs','PYQ Solved'],
 includes:['Unit I — Algorithm Analysis (recurrences, Master theorem, amortised analysis, complexity classes)','Unit II — Divide & Conquer (merge sort, quick sort, matrix multiply, closest pair of points)','Unit III — Greedy (activity selection, Huffman coding, Kruskal, Prim, Dijkstra — correctness proofs)','Unit IV — Dynamic Programming (matrix chain, LCS, 0/1 knapsack, TSP, OBST — DP tables)','Unit V — Backtracking & Branch-Bound (N-Queens, subset sum, graph colouring, 0/1 knapsack B&B)','Unit VI — NP-Completeness (P vs NP, reductions, NP-complete problems, approximation algorithms)','Master theorem all cases with examples','DP trace tables with backtracking','NP reduction proofs (SAT, Vertex Cover, etc.)','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-ml7',branch:'CS',sem:7,type:'notes',code:'510242',
 name:'Machine Learning — Complete Notes',
 tagline:'"Regression, classification, clustering, neural networks, ensemble methods. ML — with math, code and intuition."',
 badge:'hot',price:899,mrp:1699,
 contents:['6 Units','Decision Boundaries','Math Derivations','Python Code','Neural Net Diagrams','PYQ Solved'],
 includes:['Unit I — ML Fundamentals (supervised/unsupervised/RL, bias-variance tradeoff, overfitting, cross-validation)','Unit II — Regression (linear, logistic, polynomial — gradient descent derivations)','Unit III — Classification (Naive Bayes, KNN, Decision Trees, SVM — decision boundaries)','Unit IV — Clustering & Dimensionality Reduction (K-Means, hierarchical, DBSCAN, PCA)','Unit V — Ensemble Methods & Neural Networks (Random Forest, boosting, perceptron, backpropagation)','Unit VI — Model Evaluation & Frameworks (confusion matrix, ROC-AUC, cross-validation, scikit-learn, Keras)','Gradient descent derivation step-by-step','Decision boundary diagrams for each classifier','Neural network backpropagation example','Python pseudocode for every algorithm','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-bc7',branch:'CS',sem:7,type:'notes',code:'510243',
 name:'Blockchain Technology — Complete Notes',
 tagline:'"Distributed ledger, consensus mechanisms, smart contracts, Ethereum, DeFi, Hyperledger. Blockchain from ground up."',
 badge:'trending',price:799,mrp:1499,
 contents:['6 Units','Consensus Comparison','Solidity Example','Hyperledger','DeFi Overview','PYQ Solved'],
 includes:['Unit I — Blockchain Fundamentals (distributed ledger, hash chaining, Merkle trees, cryptographic hashing)','Unit II — Consensus Mechanisms (PoW, PoS, DPoS, PBFT — trade-offs, energy comparison)','Unit III — Ethereum & Smart Contracts (EVM, Solidity basics, ABI, token standards ERC-20/721)','Unit IV — DeFi & Applications (DeFi protocols, NFTs, supply chain, healthcare, identity use-cases)','Unit V — Hyperledger & Enterprise Blockchain (Fabric architecture, channels, chaincode, Corda)','Unit VI — Challenges & Future (scalability — sharding, Layer 2, regulatory landscape, Web3)','Consensus mechanism comparison table','Annotated Solidity smart contract example','Bitcoin vs Ethereum vs Hyperledger comparison','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'c-ce7-notes',branch:'CS',sem:7,type:'combo',code:'BUNDLE-CS7-N',
 name:'CS Sem 7 — Notes Bundle (All 3 Subjects)',
 tagline:'"DAA + Machine Learning + Blockchain. Sem 7 theory — all 3 subjects in one pack."',
 badge:'combo',price:1999,mrp:4697,
 contents:['3 Notes PDFs','DAA Traces','ML Math','Solidity Example','PYQ All'],
 includes:['📒 Design & Analysis of Algorithms — Complete Notes','📒 Machine Learning — Complete Notes','📒 Blockchain Technology — Complete Notes','DP tables + NP reduction proofs','ML derivations + decision boundary diagrams','Smart contract + consensus comparison','PYQ analysis for all 3 subjects'],
 exam:{cce:30,ese:70}},

// ─── CS SEM 8 ───
{id:'n-hpc8',branch:'CS',sem:8,type:'notes',code:'610241',
 name:'High Performance Computing — Complete Notes',
 tagline:'"Parallel programming models, OpenMP, MPI, GPU computing, CUDA, cluster architecture. HPC — demystified."',
 badge:'new',price:799,mrp:1499,
 contents:['6 Units','OpenMP Examples','MPI Programs','CUDA Intro','Architecture Diagrams','PYQ Solved'],
 includes:['Unit I — Parallel Computing Fundamentals (Flynn\'s taxonomy, speedup, Amdahl\'s law, efficiency)','Unit II — Shared Memory Programming (OpenMP directives, thread management, synchronisation, race conditions)','Unit III — Distributed Memory Programming (MPI model, point-to-point, collective ops, MPI_Scatter/Gather)','Unit IV — GPU Computing (GPU architecture, CUDA programming model, threads/blocks/grids, memory hierarchy)','Unit V — Cluster Computing & Cloud HPC (cluster architecture, PBS/SLURM, AWS HPC, spot instances)','Unit VI — Performance Analysis & Optimisation (profiling, cache optimisation, load balancing, benchmarks)','Amdahl\'s law worked examples','OpenMP parallel for loop examples','MPI collective communication diagrams','CUDA thread hierarchy explained'],
 exam:{cce:30,ese:70}},

{id:'n-dl8',branch:'CS',sem:8,type:'notes',code:'610242',
 name:'Deep Learning — Complete Notes',
 tagline:'"CNNs, RNNs, LSTMs, transformers, GANs, generative models. Deep learning — from perceptron to GPT architecture."',
 badge:'hot',price:899,mrp:1699,
 contents:['6 Units','CNN Architecture','LSTM Diagrams','Transformer Attention','GAN Training','PYQ Solved'],
 includes:['Unit I — Deep Learning Fundamentals (MLP, activation functions, backpropagation, weight init, optimisers)','Unit II — Convolutional Neural Networks (convolution, pooling, CNN architectures — VGG, ResNet, inception)','Unit III — Recurrent Neural Networks (RNN, vanishing gradient, LSTM, GRU — sequence modelling)','Unit IV — Attention & Transformers (attention mechanism, multi-head attention, positional encoding, BERT/GPT overview)','Unit V — Generative Models (Autoencoders, VAE, GAN architecture, training instability, DCGAN)','Unit VI — Applications & Frameworks (image classification, object detection, NLP, TensorFlow, PyTorch, Keras)','CNN feature map visualisation','LSTM gate diagram with equations','Transformer attention mechanism diagram','GAN training dynamics explained','PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'c-ce8-notes',branch:'CS',sem:8,type:'combo',code:'BUNDLE-CS8-N',
 name:'CS Sem 8 — Notes Bundle (All Subjects)',
 tagline:'"High Performance Computing + Deep Learning. Final semester theory. Finish strong."',
 badge:'combo',price:1499,mrp:3198,
 contents:['2 Notes PDFs','CUDA + OpenMP','CNN + LSTM Diagrams','Transformer Attention','PYQ Both'],
 includes:['📒 High Performance Computing — Complete Notes (OpenMP, MPI, CUDA, GPU)','📒 Deep Learning — Complete Notes (CNN, RNN, LSTM, Transformers, GANs)','OpenMP + MPI code examples','CNN architecture diagrams + LSTM gate equations','Transformer attention mechanism','PYQ analysis for both subjects'],
 exam:{cce:30,ese:70}},

// ─── AI-ML SEM 3 — LABS ───
{id:'l-dsa-aiml3',branch:'AIML',sem:3,type:'lab',code:'AIML-313',
 name:'DSA Lab — Python (10 Assignments)',
 tagline:'"All Python DSA assignments — arrays, sorting, linked lists, stacks, queues, BST, recursion. Done."',
 badge:'',price:899,mrp:1699,
 contents:['10 Python Programs','Cover Page','Sample Output','Viva Q&A 25+','Index','Flowcharts'],
 includes:['Array operations and linear/binary searching','Sorting algorithms — bubble, insertion, merge, quick (Python)','Linked list operations (insert, delete, traverse, reverse)','Stack implementation and applications (postfix, balanced brackets)','Queue and priority queue implementation','BST operations (insert, search, delete, traversal)','Recursion — Tower of Hanoi, Fibonacci, factorial','Backtracking — N-Queens problem','Cover page + index + viva Q&A (25+ Q)','Sample outputs for all programs'],
 exam:{cce:25,ese:25}},

{id:'l-oop-aiml3',branch:'AIML',sem:3,type:'lab',code:'AIML-314',
 name:'OOP Lab — Java (8 Assignments)',
 tagline:'"8 Java OOP assignments. Payroll system, bank, polymorphism, generics, file I/O, multithreading."',
 badge:'new',price:899,mrp:1699,
 contents:['8 Java Programs','Cover Page','Sample Output','Viva Q&A 25+','Index'],
 includes:['Payroll system (employee hierarchy with inheritance)','Bank account system (constructors, methods, encapsulation)','Shape hierarchy (polymorphism, abstract class, interface)','Generic stack + queue implementation','Exception handling — custom exception classes','File database application (file I/O, search & update)','Thread-based counter (multithreading, lifecycle)','Producer-Consumer problem (synchronisation)','Cover page + index + viva Q&A (25+ Q)','Sample outputs for all programs'],
 exam:{cce:25,ese:25}},

// ─── AI-ML SEM 3 — COMBOS ───
{id:'c-aiml3-notes',branch:'AIML',sem:3,type:'combo',code:'BUNDLE-AIML3-N',
 name:'AI-ML Sem 3 — Notes Bundle (All 3 Subjects)',
 tagline:'"DSA + OOP in Java + Foundation of AI. All 3 Sem 3 theory notes. One download."',
 badge:'combo',price:1999,mrp:4097,
 contents:['3 Notes PDFs','18 Units','A* Traces + CSP','PYQ All Subjects','Quick Revision'],
 includes:['📒 DSA for AI-ML — Complete Notes','📒 OOP in Java — Complete Notes','📒 Foundation of AI — Complete Notes','All 18 units covered','A* trace + CSP + Bayesian solved examples','PYQ analysis for all subjects'],
 exam:{cce:30,ese:70}},

{id:'c-aiml3-labs',branch:'AIML',sem:3,type:'combo',code:'BUNDLE-AIML3-L',
 name:'AI-ML Sem 3 — Labs Bundle (Both Labs)',
 tagline:'"Python DSA (10) + Java OOP (8). Both Sem 3 labs. 18 programs. One download."',
 badge:'combo',price:1499,mrp:3398,
 contents:['18 Programs Total','Python + Java','Viva Q&A 50+','Cover Pages x2','Sample Outputs','Index Both'],
 includes:['🧪 DSA Lab — 10 Python assignments','🧪 OOP Lab — 8 Java assignments','All cover pages + index + certificate page formats','Viva Q&A for both labs — 50+ questions','Sample output screenshots for all programs'],
 exam:{cce:25,ese:25}},

{id:'c-aiml3-full',branch:'AIML',sem:3,type:'combo',code:'BUNDLE-AIML3-FULL',
 name:'AI-ML Sem 3 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"3 notes + 2 labs. DSA, OOP, Foundation of AI. Everything for AI-ML Sem 3."',
 badge:'hot',price:2999,mrp:7495,
 contents:['3 Notes PDFs','2 Lab Packs','Viva Q&A 50+','Cover Pages All','PYQ Solved','Full Sem Coverage'],
 includes:['📒 DSA for AI-ML — Complete Notes','📒 OOP in Java — Complete Notes','📒 Foundation of AI — Complete Notes','🧪 DSA Lab — 10 Python assignments','🧪 OOP Lab — 8 Java assignments','All cover pages, index formats, certificate pages','Viva Q&A for both labs (50+ Q)','A* trace + CSP + Bayesian solved examples','SPPU 2019 AI-ML Sem 3 — complete'],
 exam:{cce:30,ese:70}},

// ═══ AI-ML SEM 4 ═══

{id:'n-dbms-aiml4',branch:'AIML',sem:4,type:'notes',code:'AIML-410',
 name:'DBMS for AI-ML — Complete Notes',
 tagline:'"ER modeling, SQL, normalisation, transactions, PL/SQL, NoSQL — with ML data pipeline context."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','SQL Reference','ER Diagrams','Normalisation','NoSQL Guide','PYQ Solved'],
 includes:['Unit I — ER Modeling (entities, relationships, attributes, ER→relational mapping)','Unit II — Relational Model & SQL (DDL, DML, joins, subqueries, aggregate functions)','Unit III — Normalisation (1NF, 2NF, 3NF, BCNF — step-by-step worked examples)','Unit IV — Transactions & Concurrency (ACID, serializability, locking, deadlock)','Unit V — PL/SQL (triggers, stored procedures, cursors, exception handling)','Unit VI — NoSQL & Big Data (MongoDB, Cassandra, CAP theorem, ML data pipelines)','Complete SQL command reference','ER diagram to relational schema conversion examples','Normalisation worked examples (hospital, college, bank scenarios)','SPPU PYQ solved'],
 exam:{cce:30,ese:70}},

{id:'n-fml',branch:'AIML',sem:4,type:'notes',code:'AIML-411',
 name:'Foundation of ML — Complete Notes',
 tagline:'"Naive Bayes, KNN, Decision Trees, SVM, backpropagation, K-Means. The subject you came here for."',
 badge:'hot',price:899,mrp:1699,
 contents:['6 Units','Decision Boundaries','Math Derivations','Python Pseudocode','Confusion Matrix','PYQ Solved'],
 includes:['Unit I — ML Fundamentals (supervised/unsupervised/RL, bias-variance, overfitting)','Unit II — Classification (Naive Bayes, KNN, Decision Trees, SVM — intuition + math)','Unit III — Regression (linear, logistic, polynomial — derivations with examples)','Unit IV — Clustering & Dimensionality (K-Means, hierarchical, PCA)','Unit V — Ensemble & Neural Nets (Random Forest, boosting, perceptron, backpropagation)','Unit VI — ML Frameworks (scikit-learn, TensorFlow/Keras basics, model evaluation metrics)','Decision boundary diagrams for each classifier','Math derivations (gradient descent, Bayes theorem)','Python pseudocode for every algorithm','Confusion matrix, ROC-AUC, precision, recall, F1','SPPU PYQ + MCQ set'],
 exam:{cce:30,ese:70}},

{id:'n-ps',branch:'AIML',sem:4,type:'notes',code:'AIML-412',
 name:'Probability & Statistics — Complete Notes',
 tagline:'"Distributions, Bayes theorem, hypothesis testing, CLT, regression. The math behind every ML model."',
 badge:'',price:799,mrp:1499,
 contents:['6 Units','60+ Numericals','Distribution Tables','Z/t/Chi-Square Tables','PYQ Solved'],
 includes:['Unit I — Descriptive Statistics (mean, median, mode, variance, SD, skewness)','Unit II — Probability Theory (axioms, conditional probability, Bayes theorem, random variables)','Unit III — Probability Distributions (Binomial, Poisson, Normal, Exponential)','Unit IV — Sampling & Estimation (CLT, confidence intervals, point estimation)','Unit V — Hypothesis Testing (Z-test, t-test, chi-square test, ANOVA)','Unit VI — Correlation & Regression (Pearson, Spearman, simple & multiple regression)','60+ solved numerical problems with step-by-step working','All distribution formulae in one reference sheet','Standard normal (Z), t-distribution, and chi-square tables included','ML applications for every statistical concept'],
 exam:{cce:30,ese:70}},

// ─── AI-ML SEM 4 — LABS ───
{id:'l-dbms-aiml4',branch:'AIML',sem:4,type:'lab',code:'AIML-413',
 name:'DBMS Lab — MySQL & SQLite Practicals',
 tagline:'"All SQL practicals — DDL, DML, joins, triggers, stored procedures, cursors. Fully documented."',
 badge:'',price:899,mrp:1699,
 contents:['All SQL Practicals','DDL + DML + PL/SQL','Triggers & Procedures','Cover Page','Viva Q&A 30+','Index'],
 includes:['DBMS DDL — CREATE, ALTER, DROP with constraints','DBMS DML — INSERT, UPDATE, DELETE, SELECT with conditions','SQL Joins — inner, left, right, full outer join examples','Views, sequences, synonyms','Aggregate functions and GROUP BY / HAVING','Subqueries and correlated subqueries','PL/SQL triggers — before/after insert/update with examples','Stored procedures & functions','Cursors in PL/SQL','Cover page + index + viva Q&A (30+ Q)'],
 exam:{cce:25,ese:25}},

{id:'l-ml-aiml4',branch:'AIML',sem:4,type:'lab',code:'AIML-414',
 name:'ML Lab — Python (8 Assignments)',
 tagline:'"8 Python ML assignments: Naive Bayes, KNN, Decision Tree, Linear Reg, Logistic Reg, K-Means, SVM, PCA."',
 badge:'hot',price:1099,mrp:2099,
 contents:['8 ML Notebooks','scikit-learn','Confusion Matrix','ROC Curves','Cover Page','Viva Q&A 35+'],
 includes:['Naive Bayes classifier (sklearn + from scratch)','K-Nearest Neighbours classifier with accuracy evaluation','Decision Tree classification + visualisation (Graphviz)','Linear regression (housing price prediction)','Logistic regression (binary classification with sigmoid)','K-Means clustering + elbow method visualisation','SVM classification with kernel comparison','PCA dimensionality reduction + visualisation','Model evaluation — confusion matrix, ROC, precision, recall, F1','Cover page + index + viva Q&A (35+ Q)'],
 exam:{cce:25,ese:25}},

// ─── AI-ML SEM 4 — COMBOS ───
{id:'c-aiml4-notes',branch:'AIML',sem:4,type:'combo',code:'BUNDLE-AIML4-N',
 name:'AI-ML Sem 4 — Notes Bundle (All 3 Subjects)',
 tagline:'"DBMS + Foundation of ML + Probability & Statistics. All 3 Sem 4 theory notes."',
 badge:'combo',price:1999,mrp:4097,
 contents:['3 Notes PDFs','18 Units','ML Derivations','Distribution Tables','PYQ All Subjects'],
 includes:['📒 DBMS for AI-ML — Complete Notes','📒 Foundation of ML — Complete Notes','📒 Probability & Statistics — Complete Notes','All 18 units covered','ML derivations + distribution tables','Z/t/chi-square tables included','PYQ analysis for all subjects'],
 exam:{cce:30,ese:70}},

{id:'c-aiml4-labs',branch:'AIML',sem:4,type:'combo',code:'BUNDLE-AIML4-L',
 name:'AI-ML Sem 4 — Labs Bundle (Both Labs)',
 tagline:'"DBMS MySQL practicals + 8 Python ML assignments. Both Sem 4 labs. One pack."',
 badge:'combo',price:1699,mrp:3798,
 contents:['All SQL Practicals','8 ML Notebooks','Viva Q&A 65+','Cover Pages x2','Sample Outputs','Jupyter Ready'],
 includes:['🧪 DBMS Lab — MySQL/SQLite all practicals','🧪 ML Lab — 8 Python assignments (Naive Bayes to SVM)','All cover pages + index + certificate page formats','Viva Q&A for both labs — 65+ questions','Sample outputs for all programs + Jupyter notebooks','scikit-learn ready code'],
 exam:{cce:25,ese:25}},

{id:'c-aiml4-full',branch:'AIML',sem:4,type:'combo',code:'BUNDLE-AIML4-FULL',
 name:'AI-ML Sem 4 — COMPLETE BUNDLE (Notes + Labs)',
 tagline:'"3 notes + 2 labs. DBMS, Foundation of ML, P&S. Everything for AI-ML Sem 4 — done."',
 badge:'hot',price:2999,mrp:7895,
 contents:['3 Notes PDFs','2 Lab Packs','8 ML Notebooks','Viva Q&A 65+','Distribution Tables','Full Sem Coverage'],
 includes:['📒 DBMS for AI-ML — Complete Notes','📒 Foundation of ML — Complete Notes','📒 Probability & Statistics — Complete Notes','🧪 DBMS Lab — MySQL/SQLite all practicals','🧪 ML Lab — 8 Python assignments (Naive Bayes to SVM + PCA)','Z/t/chi-square tables included','Confusion matrix + ROC + F1 examples','All cover pages, index formats, viva Q&A (65+ Q)','SPPU 2019 AI-ML Sem 4 — complete'],
 exam:{cce:30,ese:70}},

];// end PRODUCTS

// ══════════════════════════════════════════
// STATE + HELPERS
// ══════════════════════════════════════════
const state = { branch:'CS', sem:3, cat:'all', cart:[] };
const $=id=>document.getElementById(id);
const fmt=n=>'₹'+n.toLocaleString('en-IN');

function getSems(br){ return [...new Set(PRODUCTS.filter(p=>p.branch===br).map(p=>p.sem))].sort((a,b)=>a-b); }

// ── BRANCH SELECT
function selectBranch(br, el){
  state.branch=br;
  state.sem=getSems(br)[0];
  state.cat='all';
  document.querySelectorAll('.branch-card').forEach(c=>c.classList.remove('active'));
  el.classList.add('active');
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  document.querySelector('.cat-btn').classList.add('active');
  renderSemTabs();
  renderProducts();
  document.getElementById('shop').scrollIntoView({behavior:'smooth'});
}

// ── SEM TABS
function renderSemTabs(){
  const sems=getSems(state.branch);
  if(!sems.includes(state.sem)) state.sem=sems[0];
  $('semTabs').innerHTML=sems.map(s=>`
    <button class="sem-tab${s===state.sem?' active':''}" onclick="selectSem(${s},this)">Sem ${s}</button>
  `).join('');
}
function selectSem(s,el){
  state.sem=s;
  document.querySelectorAll('.sem-tab').forEach(t=>t.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

// ── CAT FILTER
function filterCat(cat,el){
  state.cat=cat;
  document.querySelectorAll('.cat-btn').forEach(b=>b.classList.remove('active'));
  el.classList.add('active');
  renderProducts();
}

// ── RENDER PRODUCTS
const TYPE_LABEL={notes:'📒 Notes',lab:'🧪 Lab Pack',combo:'🔥 Bundle'};
const TAB_CLASS={notes:'notes-tab',lab:'lab-tab',combo:'combo-tab'};
const SUBJ_CLASS={notes:'notes-col',lab:'lab-col',combo:'combo-col'};
const BADGE_LABEL={hot:'🔥 Popular',new:'✨ New',trending:'📈 Trending',combo:'💎 Best Value','':''};
const BADGE_CLASS={hot:'badge-hot',new:'badge-new',trending:'badge-trending',combo:'badge-combo'};

function renderProducts(){
  const items=PRODUCTS.filter(p=>
    p.branch===state.branch &&
    p.sem===state.sem &&
    (state.cat==='all'||p.type===state.cat)
  );
  const grid=$('productsGrid');
  // Update context banner
  const branchNames={'CS':'Computer Engineering','AIML':'AI & Machine Learning'};
  const banner=$('shopContextBanner');
  if(banner){
    const catLabel=state.cat==='all'?'All Packs':state.cat==='notes'?'Notes':state.cat==='lab'?'Lab Packs':'Bundles';
    banner.innerHTML=`
      <span class="ctx-branch">${branchNames[state.branch]}</span>
      <span class="ctx-sep">›</span>
      <span class="ctx-sem">Semester ${state.sem}</span>
      <span class="ctx-sep">›</span>
      <span class="ctx-cat">${catLabel}</span>
      <span class="ctx-count">${items.length} pack${items.length!==1?'s':''}</span>
    `;
  }
  if(!items.length){
    grid.innerHTML=`<div class="empty-state"><p>No products for this filter — try a different category.</p></div>`;
    return;
  }
  grid.innerHTML=items.map((p,i)=>{
    const inCart=state.cart.some(c=>c.id===p.id);
    const save=p.mrp-p.price;
    return `<div class="product-card is-${p.type}" style="animation-delay:${i*.07}s" onclick="openProductModal('${p.id}')">
      <div class="card-tab ${TAB_CLASS[p.type]}">
        <span class="tab-subject ${SUBJ_CLASS[p.type]}">${p.branch} · Sem ${p.sem} · ${TYPE_LABEL[p.type]}</span>
        ${p.badge?`<span class="tab-badge ${BADGE_CLASS[p.badge]}">${BADGE_LABEL[p.badge]}</span>`:''}
      </div>
      <div class="card-deco${p.type==='combo'?' combo-deco':''}"></div>
      <div class="card-body">
        <div class="card-code">${p.code}</div>
        <div class="card-name">${p.name}</div>
        <div class="card-tagline">${p.tagline}</div>
        <div class="card-includes-box">
          <div class="includes-title">Pack Includes</div>
          <div class="includes-tags">
            ${p.contents.map(c=>`<span class="itag">${c}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-price">
          <div class="price-main">${fmt(p.price)}</div>
          <div class="price-mrp">${fmt(p.mrp)}</div>
          <div class="price-save">Save ${fmt(save)}</div>
        </div>
        <button class="btn-add${inCart?' in-cart':''}" onclick="event.stopPropagation();addToCart('${p.id}')">
          ${inCart?'✓ Added':'+ Add to Cart'}
        </button>
      </div>
    </div>`;
  }).join('');
}

// ══ CART ══
function addToCart(id){
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p)return;
  if(state.cart.some(c=>c.id===id)){showToast('Already in your cart!');return;}
  state.cart.push(p);
  updateCartUI();renderProducts();
  showToast(`"${p.name.split('—')[0].trim()}" added!`);
  const cb=$('cartBtn')||document.querySelector('.nav-cart');
  if(cb){cb.style.transform='scale(1.18)';setTimeout(()=>cb.style.transform='',220);}
}
function removeFromCart(id){
  state.cart=state.cart.filter(c=>c.id!==id);
  updateCartUI();renderProducts();
}
function updateCartUI(){
  const{cart}=state;
  const cc=$('cartCount');if(cc)cc.textContent=cart.length;
  const cb=$('cartBody');
  if(!cart.length){
    cb.innerHTML=`<div class="cart-empty"><div class="cart-empty-icon">🛒</div><p class="cart-empty-text">Your cart is empty.<br>Your lab journal is also empty.<br>Both are problems we can solve.</p></div>`;
    $('cartTotal').textContent='₹0';return;
  }
  cb.innerHTML=cart.map(p=>`<div class="cart-item">
    <div class="cart-item-info">
      <div class="cart-item-name">${p.name}</div>
      <div class="cart-item-meta">${p.branch} · Sem ${p.sem} · ${TYPE_LABEL[p.type]}</div>
    </div>
    <span class="cart-item-price">${fmt(p.price)}</span>
    <button class="cart-item-remove" onclick="removeFromCart('${p.id}')">✕</button>
  </div>`).join('');
  $('cartTotal').textContent=fmt(cart.reduce((s,p)=>s+p.price,0));
}
function toggleCart(){
  $('cartDrawer').classList.toggle('open');
  $('cartOverlay').classList.toggle('open');
}
function checkout(){
  if(!state.cart.length){showToast('Your cart is empty!');return;}
  showToast('Redirecting to checkout… (demo)');
  toggleCart();
}

// ══ PRODUCT MODAL ══
function openProductModal(id){
  const p=PRODUCTS.find(x=>x.id===id);
  if(!p)return;
  const inCart=state.cart.some(c=>c.id===p.id);
  const save=p.mrp-p.price;
  $('modalTitle').textContent=`${p.name.split('—')[0].trim()} — Details`;
  $('modalBody').innerHTML=`
    <div class="modal-left">
      <div class="modal-type-tag">${TYPE_LABEL[p.type]} · ${p.branch} Sem ${p.sem} · ${p.code}</div>
      <div class="modal-name">${p.name}</div>
      <div class="modal-tagline">${p.tagline}</div>
      <div class="modal-includes-title">What's Inside This Pack</div>
      <ul class="modal-includes-list">
        ${p.includes.map(i=>`<li>${i}</li>`).join('')}
      </ul>
    </div>
    <div class="modal-right">
      <div class="price-box">
        <span class="price-box-main">${fmt(p.price)}</span>
        <span class="price-box-mrp">MRP ${fmt(p.mrp)}</span>
        <span class="price-box-save">You save ${fmt(save)} 🎉</span>
        <button class="modal-btn-cart" onclick="${inCart?`showToast('Already in cart!')`:`addToCart('${p.id}');closeProductModal()`}">
          ${inCart?'✓ Already in Cart':'🛒 Add to Cart'}
        </button>
        <button class="modal-btn-preview" onclick="showToast('Login to download preview!')">⬇ Free Preview (Login)</button>
        <p class="modal-note">Instant ZIP · Print-ready PDFs · SPPU format</p>
      </div>
      <div class="exam-box">
        <div class="exam-box-title">Examination Scheme</div>
        <div class="exam-grid">
          <div class="exam-item"><span>${p.exam.cce}</span><small>CCS / TW</small></div>
          <div class="exam-item"><span>${p.exam.ese>0?p.exam.ese:'TW'}</span><small>${p.exam.ese>0?'ESE / Oral':'Continuous'}</small></div>
        </div>
      </div>
      <div class="modal-disclaimer-box">
        <strong>Note:</strong> LabLoot packs are for educational reference. Understanding the material remains your responsibility. Results may vary based on handwriting legibility and whether your examiner has had coffee.
      </div>
    </div>`;
  $('productModal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeProductModal(){
  $('productModal').classList.remove('open');
  document.body.style.overflow='';
}
$('productModal').addEventListener('click',function(e){if(e.target===this)closeProductModal();});

// ══ LAB 7: SECURITY — bcryptjs + Math CAPTCHA ══

// ── In-memory user store (simulates a DB for demo) ──
const userStore = {}; // { email: { name, hash } }

// ── Math CAPTCHA generator ──
const captchaState = { signin: { answer: 0 }, register: { answer: 0 } };

function generateCaptcha(panelId) {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const ops = [
    { q: `${a} + ${b}`, ans: a + b },
    { q: `${a + b} − ${b}`, ans: a },
    { q: `${a} × ${b}`, ans: a * b },
  ];
  const picked = ops[Math.floor(Math.random() * ops.length)];
  captchaState[panelId].answer = picked.ans;
  const qEl = $(panelId === 'signin' ? 'signin-captcha-q' : 'reg-captcha-q');
  if (qEl) qEl.textContent = `What is ${picked.q} ?`;
}

function verifyCaptcha(panelId) {
  const inputId = panelId === 'signin' ? 'signin-captcha-input' : 'reg-captcha-input';
  const val = parseInt($( inputId ).value.trim(), 10);
  return val === captchaState[panelId].answer;
}

// ── Password strength checker ──
function checkPasswordStrength(pw) {
  const fill = $('strength-fill');
  const label = $('strength-label');
  if (!fill || !label) return;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  const levels = [
    { w: '0%',   bg: 'transparent', txt: '' },
    { w: '25%',  bg: '#c0392b',     txt: '⚠ Weak — even your backlog is stronger' },
    { w: '50%',  bg: '#c9973a',     txt: '◑ Fair — acceptable, like a 50% attendance' },
    { w: '75%',  bg: '#1a6b3c',     txt: '✓ Good — professor will be impressed' },
    { w: '100%', bg: '#0a5c28',     txt: '✓✓ Strong — you actually studied for this' },
  ];
  const lvl = levels[score] || levels[0];
  fill.style.width = lvl.w;
  fill.style.background = lvl.bg;
  label.textContent = lvl.txt;
  label.style.color = lvl.bg;
}

// ── Error display helpers ──
function setError(id, msg) { const el=$(id); if(el){el.textContent=msg;} }
function clearError(id) { setError(id, ''); }

// ── LOGIN MODAL OPEN/CLOSE ──
function openLogin() {
  $('loginOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
  generateCaptcha('signin');
  generateCaptcha('register');
  clearError('signin-error');
  clearError('reg-error');
}
function closeLogin() {
  $('loginOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
function switchLoginTab(tab, el) {
  document.querySelectorAll('.login-tab-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  $('panel-signin').classList.remove('active');
  $('panel-register').classList.remove('active');
  $('panel-' + tab).classList.add('active');
  clearError('signin-error');
  clearError('reg-error');
}

// ── REGISTER with bcrypt hash + CAPTCHA ──
async function handleRegister() {
  clearError('reg-error');
  const email    = $('reg-email')    ? $('reg-email').value.trim()    : '';
  const password = $('reg-password') ? $('reg-password').value        : '';
  const fname    = $('reg-fname')    ? $('reg-fname').value.trim()    : '';

  if (!email || !password || !fname) {
    setError('reg-error', 'Please fill in all fields.');
    return;
  }
  if (password.length < 6) {
    setError('reg-error', 'Password must be at least 6 characters.');
    return;
  }
  if (!verifyCaptcha('register')) {
    setError('reg-error', 'Incorrect answer. Are you a bot or just bad at maths?');
    generateCaptcha('register');
    $('reg-captcha-input').value = '';
    return;
  }
  if (userStore[email]) {
    setError('reg-error', 'Email already registered. Try signing in.');
    return;
  }

  // Hash password with bcryptjs (salt rounds = 10)
  const btn = document.querySelector('#panel-register .btn-submit');
  btn.textContent = 'Hashing password…';
  btn.disabled = true;

  try {
    const salt = await dcodeIO.bcrypt.genSalt(10);
    const hash = await dcodeIO.bcrypt.hash(password, salt);
    userStore[email] = { name: fname, hash };
    btn.textContent = 'Create Account →';
    btn.disabled = false;
    closeLogin();
    showToast(`Welcome, ${fname}! Account created & password secured.`);
  } catch(e) {
    setError('reg-error', 'Something went wrong. Try again.');
    btn.textContent = 'Create Account →';
    btn.disabled = false;
  }
}

// ── LOGIN with bcrypt compare + CAPTCHA ──
async function handleLogin() {
  clearError('signin-error');
  const email    = $('signin-email')    ? $('signin-email').value.trim()    : '';
  const password = $('signin-password') ? $('signin-password').value        : '';

  if (!email || !password) {
    setError('signin-error', 'Please enter your email and password.');
    return;
  }
  if (!verifyCaptcha('signin')) {
    setError('signin-error', 'Wrong CAPTCHA answer. Refresh and try again.');
    generateCaptcha('signin');
    $('signin-captcha-input').value = '';
    return;
  }

  const user = userStore[email];
  if (!user) {
    setError('signin-error', 'No account found. Please register first.');
    return;
  }

  const btn = document.querySelector('#panel-signin .btn-submit');
  btn.textContent = 'Verifying…';
  btn.disabled = true;

  try {
    const match = await dcodeIO.bcrypt.compare(password, user.hash);
    btn.textContent = 'Sign In →';
    btn.disabled = false;
    if (match) {
      closeLogin();
      showToast(`Welcome back, ${user.name}!`);
    } else {
      setError('signin-error', 'Incorrect password. Try again.');
      generateCaptcha('signin');
      $('signin-captcha-input').value = '';
    }
  } catch(e) {
    setError('signin-error', 'Something went wrong. Try again.');
    btn.textContent = 'Sign In →';
    btn.disabled = false;
  }
}

$('loginOverlay').addEventListener('click', function(e) { if (e.target === this) closeLogin(); });

// ══ TOAST ══
let _tt;
function showToast(msg){
  const t=$('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(_tt);_tt=setTimeout(()=>t.classList.remove('show'),2800);
}

// ══ ESC CLOSE ══
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if($('productModal').classList.contains('open'))closeProductModal();
    if($('loginOverlay').classList.contains('open'))closeLogin();
    if($('cartDrawer').classList.contains('open'))toggleCart();
    if(searchQuery) clearSearch();
  }
});

// ══ INIT ══
(function(){renderSemTabs();renderProducts();updateCartUI();})();

// ══ LAB 2: SEARCH ══
let searchQuery = '';

function handleSearch(val) {
  searchQuery = val.trim().toLowerCase();
  const clearBtn = $('navSearchClear');
  if (clearBtn) clearBtn.classList.toggle('visible', searchQuery.length > 0);

  const shopInner = document.querySelector('.shop-inner');
  if (shopInner) shopInner.classList.toggle('search-mode', searchQuery.length > 0);

  if (searchQuery.length > 0) {
    renderSearchResults();
    $('shop').scrollIntoView({ behavior: 'smooth' });
  } else {
    // restore context banner class
    const banner = $('shopContextBanner');
    if (banner) banner.className = 'shop-context';
    renderProducts();
  }
}

function clearSearch() {
  const input = $('navSearchInput');
  if (input) input.value = '';
  handleSearch('');
}

function renderSearchResults() {
  const q = searchQuery;
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.code.toLowerCase().includes(q) ||
    p.tagline.toLowerCase().includes(q) ||
    p.branch.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q) ||
    p.contents.some(c => c.toLowerCase().includes(q)) ||
    p.includes.some(i => i.toLowerCase().includes(q)) ||
    `sem ${p.sem}`.includes(q) ||
    `semester ${p.sem}`.includes(q)
  );

  // Update context banner
  const banner = $('shopContextBanner');
  if (banner) {
    banner.className = 'shop-context search-active';
    banner.innerHTML = `
      <span class="ctx-search-query">&#8981; "${q}"</span>
      <span class="ctx-sep">—</span>
      <span class="ctx-cat">All Branches &amp; Semesters</span>
      <span class="ctx-count">${results.length} result${results.length !== 1 ? 's' : ''}</span>
    `;
  }

  const grid = $('productsGrid');
  if (!results.length) {
    grid.innerHTML = `<div class="empty-state"><p>No packs found for "<em>${q}</em>" — try a subject name, code, or semester.</p></div>`;
    return;
  }

  // escape regex special chars for highlight
  const esc = q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const hl = str => str.replace(new RegExp(`(${esc})`, 'gi'), '<mark class="search-highlight">$1</mark>');

  grid.innerHTML = results.map((p, i) => {
    const inCart = state.cart.some(c => c.id === p.id);
    const save = p.mrp - p.price;
    return `<div class="product-card is-${p.type}" style="animation-delay:${i * .05}s" onclick="openProductModal('${p.id}')">
      <div class="card-tab ${TAB_CLASS[p.type]}">
        <span class="tab-subject ${SUBJ_CLASS[p.type]}">${p.branch} · Sem ${p.sem} · ${TYPE_LABEL[p.type]}</span>
        ${p.badge ? `<span class="tab-badge ${BADGE_CLASS[p.badge]}">${BADGE_LABEL[p.badge]}</span>` : ''}
      </div>
      <div class="card-deco${p.type === 'combo' ? ' combo-deco' : ''}"></div>
      <div class="card-body">
        <div class="card-code">${hl(p.code)}</div>
        <div class="card-name">${hl(p.name)}</div>
        <div class="card-tagline">${p.tagline}</div>
        <div class="card-includes-box">
          <div class="includes-title">Pack Includes</div>
          <div class="includes-tags">
            ${p.contents.map(c => `<span class="itag">${c}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-price">
          <div class="price-main">${fmt(p.price)}</div>
          <div class="price-mrp">${fmt(p.mrp)}</div>
          <div class="price-save">Save ${fmt(save)}</div>
        </div>
        <button class="btn-add${inCart ? ' in-cart' : ''}" onclick="event.stopPropagation();addToCart('${p.id}')">
          ${inCart ? '✓ Added' : '+ Add to Cart'}
        </button>
      </div>
    </div>`;
  }).join('');
}

// ══ LAB 4: MAILCHIMP BANNER ══
(function initMCBanner() {
  // Show banner after 8 seconds, only if not previously dismissed
  const dismissed = sessionStorage.getItem('mc_dismissed');
  if (!dismissed) {
    setTimeout(() => {
      const banner = document.getElementById('mcBanner');
      if (banner) banner.classList.add('visible');
    }, 8000);
  }
})();

function dismissMCBanner() {
  const banner = document.getElementById('mcBanner');
  if (banner) banner.classList.remove('visible');
  sessionStorage.setItem('mc_dismissed', '1');
}

function handleMCSubmit() {
  const input = document.getElementById('mc-email');
  const response = document.getElementById('mc-response');
  const btn = document.querySelector('.mc-submit-btn');
  const btnText = document.getElementById('mc-btn-text');

  if (!input || !response) return;

  const email = input.value.trim();

  // Basic email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    response.className = 'mc-response error';
    response.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate Mailchimp API call
  // In production: replace with your actual Mailchimp POST action URL
  btn.disabled = true;
  btnText.textContent = 'Subscribing…';
  response.className = 'mc-response';
  response.textContent = '';

  setTimeout(() => {
    // Simulated success response
    btn.disabled = false;
    btnText.textContent = 'Notify Me →';
    input.value = '';
    response.className = 'mc-response success';
    response.textContent = '✓ You\'re on the list! We\'ll notify you when new packs drop.';

    // Auto-dismiss banner after 3 seconds on success
    setTimeout(() => dismissMCBanner(), 3000);
  }, 1200);
}
