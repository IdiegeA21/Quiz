//this is the detaials of the participants and their passwords

let membersInfo = [
    {
        name: "Abel",
        password: "abe12005",
        id: "comrade01"
    },
    {
        name: "Barbara",
        password: "bar83946",
        id: "comrade02"
    },   
    {
        name: "Chimamaka",
        password: "chi48492",
        id: "comrade03"
    },
    {
        name: "Emmanuel",
        password: "ema73937",
        id: "comrade04"
    },
    {
        name: "Gideon",
        password: "gid84920",
        id: "comrade05"
    },
    {
        name: "Isaac",
        password: "isa28494",
        id: "comrade06"
    },
    {
        name: "Kennedy",
        password: "ken10790",
        id: "comrade07"
    },
    {
        name: "Michael",
        password: "mic00281",
        id: "comrade08"
    },
    {
        name: "Sarah",
        password: "sar48583",
        id: "comrade09"
    },
    {
        name: "Ubong",
        password: "ubo09847",
        id: "comrade10"
    },
    {
        name: "Wisdom",
        password: "wis87495",
        id: "comrade11"
    },
    {
        name: "Kelechi",
        password: "kel03952",
        id: "comrade12"
    },
    {
        name: "Cherish",
        password: "che09803",
        id: "comrade13"
    },
    {
        name: "Bessi",
        password: "bes09462",
        id: "comrade14"
    },
    {
        name: "Clement",
        password: "cle73874",
        id: "comrade15"
    },
    {
        name: "Fred",
        password: "fre73874",
        id: "comrade16"
    },
    {
        name: "Samuel",
        password: "sam30174",
        id: "comrade17"
    },
    {
        name: "Tony",
        password: "ton73830",
        id: "comrade18"
    },
    {
        name: "Matilda",
        password: "mit00002",
        id: "comrade19"
    },
    {
        name: "Inah",
        password: "ina00001",
        id: "comrade20"
    },
    {
        name: "Demo1",
        password: "dem00001",
        id: "comrade-4"
    },
    {
        name: "Demo2",
        password: "dem00002",
        id: "comrade-3"
    },
    {
        name: "Demo3",
        password: "dem00003",
        id: "comrade-2"
    },
    {
        name: "mst",
        password: "mit00001",
        id: "comrade-1"
    },
]

let quiz = [
    {
        que_id: 1,
        que: "What is Idiege Inah's Favourite Colour?",
        options: {
            opt1: "Red",
            opt2: "Green",
            opt3: "Orange",
            opt4: "Blue"
        },
        answer: "opt2"
    },
    {
        que_id: 2,
        que: "What is Idiege Inah's Favourite Food?",
        options: {
            opt1: "White rice and pepper soup",
            opt2: "Spaghetti with plenty of pepper and decorations",
            opt3: "Victoria Idiege's Afang soup (His mother)",
            opt4: "Stella Ogidi's Bitterleaf's soup"
        },
        answer: "opt2"
    },
    {
        que_id: 3,
        que: "Who is Idiege Inah's Favourite Person?",
        options: {
            opt1: "idiege Inah",
            opt2: "Blake Lively",
            opt3: "Sia",
            opt4: "God"
        },
        answer: "opt2"
    },
    {
        que_id: 4,
        que: "Among the listed names below who do you think idiege inah is fond of?",
        options: {
            opt1: "Gideon",
            opt2: "Micheal",
            opt3: "Kennedy",
            opt4: "Emmanuel"
        },
        answer: "opt2"
    },
    {
        que_id: 5,
        que: "Which of this is among Idiege Inah's favourite Activity?",
        options: {
            opt1: "Talking to you guys",
            opt2: "Sleeping",
            opt3: "Watching movies and football",
            opt4: "Coding"
        },
        answer: "opt1"
    },
]


let mainQuiz = [
    {
        que_id: 1,
        que: "Colloids are classified into?",
        options: {
            opt1: "Granules and Gel",
            opt2: "Lyophobic and Lyophilic",
            opt3: "Aerosol and Sol",
            opt4: "Emulsion Coagulates"
        },
        answer: "opt2"
    },
    {
        que_id: 2,
        que: "Planar Chromatography is classified into?",
        options: {
            opt1: "Adsorption and Partition Chromatography",
            opt2: "Paper and Thin layer Chromatography",
            opt3: "Liquid-Liquid and Liquid - Solid Chromatography",
            opt4: "Column And Paper Chromatography"
        },
        answer: "opt2"
    },
    {
        que_id: 3,
        que: "Which of the following is the first and most fundamental separation technology used in the refining process of crude oil?",
        options: {
            opt1: "Fractional Distillation",
            opt2: "Atmospheric Distillation",
            opt3: "Vacuum Distillation",
            opt4: "Distillation"
        },
        answer: "opt2"
    },
    {
        que_id: 4,
        que: "The best form of petroleum is the?",
        options: {
            opt1: "Natural gas",
            opt2: "Crude oil",
            opt3: "Condensates",
            opt4: "Petroleum gas"
        },
        answer: "opt3"
    },
    {
        que_id: 5,
        que: "In geochemistry, carbon number greater than 40 are called?",
        options: {
            opt1: "Kerosene",
            opt2: "Heavy gas",
            opt3: "Light gas",
            opt4: "Residue"
        },
        answer: "opt4"
    },
    {
        que_id: 6,
        que: "Biomarkers are equivalent to fingerprints?",
        options: {
            opt1: "True",
            opt2: "False",
            opt3: "Maybe",
            opt4: "I don't know"
        },
        answer: "opt1"
    },
    {
        que_id: 7,
        que: "Which of the following is not a synthetic fiber?",
        options: {
            opt1: "Acrylics",
            opt2: "Polyesters",
            opt3: "Polyolefins",
            opt4: "Acetate fibres"
        },
        answer: "opt4"
    },
    {
        que_id: 8,
        que: "Which of the following determines the shade/hue of a fibre?",
        options: {
            opt1: "Pigment",
            opt2: "Substrates",
            opt3: "Chromophore",
            opt4: "Proteins"
        },
        answer: "opt3"
    },
    {
        que_id: 9,
        que: "Reppe process is the best process in the synthesis of;?",
        options: {
            opt1: "Propylene oxide",
            opt2: "Methacrylic acid methacrylate",
            opt3: "Cyclododecane",
            opt4: "1,4- Butanediol"
        },
        answer: "opt4"
    },
    {
        que_id: 10,
        que: "Which of the listed metal is at the center of the Ziegler Natta catalyst?",
        options: {
            opt1: "Palladium",
            opt2: "Nickel",
            opt3: "Titanium",
            opt4: "Iron"
        },
        answer: "opt3"
    },
    {
        que_id: 11,
        que: "In the nickel family, which of them has the highest capacity of absorbing hydrogen gas?",
        options: {
            opt1: "Nickel",
            opt2: "Palladium",
            opt3: "Platinum",
            opt4: "All of them"
        },
        answer: "opt2"
    },
    {
        que_id: 12,
        que: "The alkali metals are usually obtained from their ____?",
        options: {
            opt1: "Fused Chlorides",
            opt2: "Alloys",
            opt3: "Ores",
            opt4: "Either of the above"
        },
        answer: "opt1"
    },
    {
        que_id: 13,
        que: "Which of the following is a not a property of the transition metals?",
        options: {
            opt1: "Multiplicity of oxidation state",
            opt2: "Formation of coloured compounds",
            opt3: "High cohesive energy",
            opt4: "Low Density"
        },
        answer: "opt4"
    },
    {
        que_id: 14,
        que: "The insoluble part of organic matter is called?",
        options: {
            opt1: "Bitumen",
            opt2: "Kerogen",
            opt3: "Biomarkers",
            opt4: "Organic rich"
        },
        answer: "opt2"
    },
    {
        que_id: 15,
        que: "Nernst distribution law applicable in?",
        options: {
            opt1: "Liquid-Liquid",
            opt2: "Liquid - Solid",
            opt3: "Liquid - Gas",
            opt4: "Gas- Liquid"
        },
        answer: "opt1"
    },
    {
        que_id: 16,
        que: "Fractional distillation of petroleum depends on the differences in?",
        options: {
            opt1: "Molar masses",
            opt2: "Boiling points",
            opt3: "Densities",
            opt4: "Melting points"
        },
        answer: "opt2"
    },
    {
        que_id: 17,
        que: "'Electrons will occupy degenerate orbitals singly with the same spin before pairing'. This is?",
        options: {
            opt1: "Aufbau principle",
            opt2: "Pauli Exclusion Principle",
            opt3: "Hund's rule of maximum multiplicity",
            opt4: "Electron spin principle"
        },
        answer: "opt3"
    },
    {
        que_id: 18,
        que: "Which of the electronic configurations represent that of a noble gas?",
        options: {
            opt1: "2,8,8,2",
            opt2: "2,8,2",
            opt3: "2,8",
            opt4: "2,6"
        },
        answer: "opt3"
    },
    {
        que_id: 19,
        que: "The volume of a fixed mass of gas is inversely proportional to pressure, at constant temperature. This is;?",
        options: {
            opt1: "Boyle's law",
            opt2: "Charle's law",
            opt3: "Avogadro's law",
            opt4: "Ideal gas Law"
        },
        answer: "opt1"
    },
    {
        que_id: 20,
        que: "Alkenes are also known as?",
        options: {
            opt1: "Acetylene",
            opt2: "Olefins",
            opt3: "Paraffins",
            opt4: "Akyls"
        },
        answer: "opt2"
    },
    {
        que_id: 21,
        que: "Which of the following statements is true?",
        options: {
            opt1: "All aromatic hydrocarbons are cyclic hydrocarbons",
            opt2: "Alkenes are also called alkyls",
            opt3: "All cyclic hydrocarbons are aromatic hydrocarbons",
            opt4: "Alkenes are also called acetylene"
        },
        answer: "opt1"
    },
    {
        que_id: 22,
        que: "All the following are true of solids except that they?",
        options: {
            opt1: "cannot be compressed",
            opt2: "has a definite weight",
            opt3: "has a definite shape",
            opt4: "has a definite volume"
        },
        answer: "opt2"
    },
    {
        que_id: 23,
        que: "The gas that is most useful in protecting humans against solar radiation is?",
        options: {
            opt1: "Carbon(IV) oxide",
            opt2: "Oxygen",
            opt3: "Ozone",
            opt4: "Hydrogen"
        },
        answer: "opt3"
    },
    {
        que_id: 24,
        que: "Which of the following is associated with electrolysis?",
        options: {
            opt1: "Rutherford",
            opt2: "Mendeleev",
            opt3: "Faraday",
            opt4: "Einstein"
        },
        answer: "opt3"
    },
    {
        que_id: 25,
        que: "Any amalgam alloy is likely to contain?",
        options: {
            opt1: "Nickel",
            opt2: "Silver",
            opt3: "Mercury",
            opt4: "Lead"
        },
        answer: "opt3"
    },
    {
        que_id: 26,
        que: "Where is the mass of an atom concentrated?",
        options: {
            opt1: "Nucleus",
            opt2: "Electrons",
            opt3: "Shell",
            opt4: "Orbital"
        },
        answer: "opt1"
    },
    {
        que_id: 27,
        que: "What is the smallest unit of an element that retains its chemical properties?",
        options: {
            opt1: "Molecule",
            opt2: "Shell",
            opt3: "Atom",
            opt4: "Nucleus"
        },
        answer: "opt3"
    },
    {
        que_id: 28,
        que: "What type of chemical bond involves the sharing of electrons between atoms?",
        options: {
            opt1: "Covalent Bond",
            opt2: "Ionic Bond",
            opt3: "Hydrogen Bond",
            opt4: "Metallic Bond"
        },
        answer: "opt1"
    },
    {
        que_id: 29,
        que: "Which gas is responsible for the distinctive smell of rotten eggs?",
        options: {
            opt1: "Hydrogen Peroxide",
            opt2: "Phosgene",
            opt3: "Aerosol and Sol",
            opt4: "Hydrogen Sulphide"
        },
        answer: "opt4"
    },
    {
        que_id: 30,
        que: "Which element is the most abundant in Earth's crust?",
        options: {
            opt1: "Aluminium",
            opt2: "Oxygen",
            opt3: "Carbon",
            opt4: "Iron"
        },
        answer: "opt2"
    },
    {
        que_id: 31,
        que: "What is the process by which a substance changes from a solid directly to a gas without passing through the liquid phase?",
        options: {
            opt1: "Evaporation",
            opt2: "Sublimation",
            opt3: "Vaporization",
            opt4: "Condensation"
        },
        answer: "opt2"
    },
    {
        que_id: 32,
        que: "Which compound reacts with Phosgene to form a polycarbonate?",
        options: {
            opt1: "Methyl Methacrylate",
            opt2: "Bisphenyl-A",
            opt3: "Ethyl Acrylate",
            opt4: "Methyl Isocyanate"
        },
        answer: "opt2"
    },
    {
        que_id: 32,
        que: "What name is given to the class of organic compounds containing a carbonyl group (C=O) and a hydroxyl group (OH) on adjacent carbon atoms?",
        options: {
            opt1: "Aldehydes",
            opt2: "Ketones",
            opt3: "Aldols",
            opt4: "Carboxylic acids"
        },
        answer: "opt3"
    },
    {
        que_id: 33,
        que: "Which compound, derived from ammonia, is used in the production of urea-formaldehyde resins and as a textile and paper industry reagent?",
        options: {
            opt1: "Ethylamine",
            opt2: "Methylamine",
            opt3: "Trimethylamine",
            opt4: "Hexamethylenetetramine"
        },
        answer: "opt4"
    },
    {
        que_id: 34,
        que: "In which direction do atomic size and atomic radius generally increase as you move across a period (row) of the periodic table?",
        options: {
            opt1: "Left to right",
            opt2: "Downwards",
            opt3: "Right to left",
            opt4: "Upwards"
        },
        answer: "opt2"
    },
    {
        que_id: 35,
        que: "Which group of elements in the periodic table is known for their full valence electron shells, making them stable and less reactive?",
        options: {
            opt1: "Halogen",
            opt2: "Pnictogens",
            opt3: "Noble Gases",
            opt4: "Group 10 (VIIIb)"
        },
        answer: "opt3"
    },
    {
        que_id: 36,
        que: "What is the general name of the Nitrogen group?",
        options: {
            opt1: "Pre-Halogens",
            opt2: "Pnictogens",
            opt3: "Noble Gases",
            opt4: "Alkali non-metals"
        },
        answer: "opt2"
    },
    {
        que_id: 37,
        que: "Among the alkali metals (Group 1), which element has the highest ionization energy?",
        options: {
            opt1: "Potassium",
            opt2: "Cesium",
            opt3: "Sodium",
            opt4: "Lithium"
        },
        answer: "opt2"
    },
    {
        que_id: 38,
        que: "What 2 factors are responsible for the solubility of Group II and I elements in Liquid Ammonia?",
        options: {
            opt1: "Low Ionization and Low Lattice Energy",
            opt2: "High Electropositivity and Large Atomic Radius",
            opt3: "High Melting Point and High Density",
            opt4: "High Oxidation State and High Reactivity"
        },
        answer: "opt1"
    },
    {
        que_id: 39,
        que: "As you move from left to right across a period in the periodic table, how does the electronegativity of elements generally change?",
        options: {
            opt1: "Increases",
            opt2: "Varies unpredictably",
            opt3: "Decreases",
            opt4: "Remains constant"
        },
        answer: "opt1"
    },
    {
        que_id: 40,
        que: "Hydrogen has three isotopes: protium, deuterium, and tritium. Among these, which isotope of hydrogen contains one proton and one neutron in its nucleus?",
        options: {
            opt1: "Tritium",
            opt2: "Protium",
            opt3: "None of the above",
            opt4: "Deuterium"
        },
        answer: "opt4"
    },
    {
        que_id: 41,
        que: "Which of the following applications commonly utilizes the alloy 'Duramin,' a titanium-based alloy known for its excellent strength-to-weight ratio and corrosion resistance?",
        options: {
            opt1: "Ceramic pottery production",
            opt2: "Aerospace components",
            opt3: "Battery electrodes",
            opt4: "High-temperature superconductors"
        },
        answer: "opt2"
    },
    {
        que_id: 42,
        que: "In the iron and steel industry, what role does manganese primarily play when added to the alloy?",
        options: {
            opt1: "Improving ductility",
            opt2: "Increasing corrosion resistance",
            opt3: "Acting as a deoxidizer and reducing sulfur content",
            opt4: "Enhancing electrical conductivity"
        },
        answer: "opt3"
    },
    {
        que_id: 43,
        que: "Which mineral serves as the primary ore for the production of tin, a versatile metal widely used in the manufacturing of various products?",
        options: {
            opt1: "Malachite",
            opt2: "Rutile",
            opt3: "Cassiterite",
            opt4: "Hematite"
        },
        answer: "opt3"
    },
    {
        que_id: 44,
        que: "What is the term used to describe the phenomenon where the contraction of atomic size and the increase in effective nuclear charge across the lanthanide series result in the relatively small difference in atomic and ionic sizes among the lanthanide elements?",
        options: {
            opt1: "Ionization Conundrum",
            opt2: "Lanthanide Contraction",
            opt3: "Effective Shielding",
            opt4: "Atomic Convergence"
        },
        answer: "opt2"
    },
    {
        que_id: 45,
        que: "What industrial process, named after its inventor, William J. Kroll, is commonly used for the extraction of titanium metal from its ore, titanium dioxide (TiO2)?",
        options: {
            opt1: "William's reduction Process",
            opt2: "Jkroll's reduction process",
            opt3: "Kroll's reduction process",
            opt4: "Solvay Process"
        },
        answer: "opt3"
    },
    {
        que_id: 46,
        que: "What is the hybridization state of the central atom in a molecule with a tetrahedral electron domain geometry?",
        options: {
            opt1: " sp^3",
            opt2: " sp",
            opt3: "sp^2",
            opt4: "d^2sp^3"
        },
        answer: "opt1"
    },
    {
        que_id: 47,
        que: "In organic chemistry, what term describes the mixing of atomic orbitals to form new hybrid orbitals with different properties?",
        options: {
            opt1: "Ionization",
            opt2: "Hybridization",
            opt3: "Atomization",
            opt4: "Orbitalization"
        },
        answer: "opt2"
    },
    {
        que_id: 48,
        que: "Who is credited with arranging the elements in the periodic table based on atomic number instead of atomic mass, leading to the modern layout?",
        options: {
            opt1: "John Newlands",
            opt2: "Dmitri Mendeleev",
            opt3: "Henry Moseley",
            opt4: "J W Döbereiner"
        },
        answer: "opt3"
    },
    {
        que_id: 49,
        que: "What Russian chemist is credited with creating the first version of the periodic table in the 1860s, arranging elements by atomic mass and leaving gaps for undiscovered elements?",
        options: {
            opt1: "Dmitri Mendeleev",
            opt2: "Dimitri Mendelov",
            opt3: "Dmitri Ivanovich Mendeleev",
            opt4: "Dmitri Mendeloff"
        },
        answer: "opt1"
    },
    {
        que_id: 50,
        que: "Before the modern periodic table, which term was commonly used for elements with similar properties that occurred in repeating patterns?",
        options: {
            opt1: "Homogenous Elements",
            opt2: "Periods",
            opt3: "Groups",
            opt4: "Triads"
        },
        answer: "opt4"
    },
    {
        que_id: 51,
        que: "Who independently proposed the periodic law around the same time as Dmitri Mendeleev, organizing elements by increasing atomic mass and similar properties?",
        options: {
            opt1: "Henry Moseley",
            opt2: "Julius Lothar Meyer",
            opt3: "William Ramsay",
            opt4: "Alexandre-Émile Béguyer de Chancourtois"
        },
        answer: "opt2"
    },
    {
        que_id: 52,
        que: "What type of isomerism occurs when two or more compounds have the same molecular formula but different arrangements of atoms within the molecule?",
        options: {
            opt1: "Structural Isomerism",
            opt2: "Geometric Isomerism",
            opt3: "Optical Isomerism",
            opt4: "Conformational Isomerism"
        },
        answer: "opt1"
    },
    {
        que_id: 53,
        que: "Which type of isomerism is observed in compounds that have the same molecular formula and the same connectivity of atoms, but differ in the arrangement of atoms in space?",
        options: {
            opt1: "Geometric Isomerism",
            opt2: "Tautomeric Isomerism",
            opt3: "Optical Isomerism",
            opt4: "Structural Isomerism"
        },
        answer: "opt3"
    },
    {
        que_id: 54,
        que: "The ability of a solution to resist changes in pH when an acid or base is added to it is called _____",
        options: {
            opt1: "Buffer Capacity",
            opt2: "pH equilibrium",
            opt3: "Back titration",
            opt4: "Kjedahl solution"
        },
        answer: "opt1"
    },
    {
        que_id: 55,
        que: "The carbonyl carbon is electron deficient,therefore it will react with ____",
        options: {
            opt1: "A reducing agent",
            opt2: "An oxidizing agent",
            opt3: "A nucleophilic reagent",
            opt4: "An electrophilic reagent"
        },
        answer: "opt3"
    },
    {
        que_id: 56,
        que: "Which of the following reaction is specific to the aldehyde type that has alpha hydrogen?",
        options: {
            opt1: "Oxidation reaction",
            opt2: "Canizzaro reaction",
            opt3: "Addition reaction",
            opt4: "Reduction reaction"
        },
        answer: "opt2"
    },
    {
        que_id: 57,
        que: "Structures that differ only based on rotations are called___",
        options: {
            opt1: "Isomers",
            opt2: "Optimers",
            opt3: "Allotropes",
            opt4: "Conformers"
        },
        answer: "opt4"
    },
    {
        que_id: 58,
        que: "Transition metals are known for their ability to form colorful compounds. What is the term used to describe this property?",
        options: {
            opt1: "Luminescence",
            opt2: "Fluorescence",
            opt3: "Chromaticity",
            opt4: "Coordination color"
        },
        answer: "opt4"
    },
    {
        que_id: 59,
        que: "Which property of transition metals makes them excellent catalysts in various chemical reactions?",
        options: {
            opt1: "High boiling point",
            opt2: "Variable oxidation states",
            opt3: "Brittle nature",
            opt4: "Small atomic sizes"
        },
        answer: "opt2"
    },
    {
        que_id: 60,
        que: "Transition metals are known for their ability to absorb and emit visible light. This phenomenon is called:",
        options: {
            opt1: "Absorption",
            opt2: "Colorimetry",
            opt3: "Resonance",
            opt4: "Dispersion"
        },
        answer: "opt2"
    },
    {
        que_id: 61,
        que: "Which of the following transition metals is commonly used in stainless steel due to its resistance to corrosion?",
        options: {
            opt1: "Copper",
            opt2: "Iron",
            opt3: "Chromium",
            opt4: "Manganese"
        },
        answer: "opt3"
    },
    {
        que_id: 62,
        que: "Which property of transition metals allows them to readily form complex ions with ligands in coordination compounds?",
        options: {
            opt1: "Ductility",
            opt2: "Small Atomic sizes",
            opt3: "Variable coordination number",
            opt4: " High melting point"
        },
        answer: "opt3"
    },
    {
        que_id: 63,
        que: "What unique property of mercury distinguishes it from both zinc and cadmium, making it a valuable element in certain scientific and technological applications?",
        options: {
            opt1: "Its ability to conduct electricity",
            opt2: "Its strong affinity for oxygen",
            opt3: "Its ability to form amalgams with other metals",
            opt4: "Its high reactivity with acids"
        },
        answer: "opt3"
    }
]