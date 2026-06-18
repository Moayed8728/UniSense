export type CoverageMajor = {
  id: string;
  code: string;
  title: string;
};

export type CoverageCategory = {
  code: string;
  title: string;
  parentCode: string;
  parentTitle: string;
  majors: CoverageMajor[];
};

export const coverageCategories: CoverageCategory[] = [
  {
    "code": "01.00",
    "title": "Agriculture, General",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0000",
        "code": "01.0000",
        "title": "Agriculture, General"
      }
    ]
  },
  {
    "code": "01.01",
    "title": "Agricultural Business and Management",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0101",
        "code": "01.0101",
        "title": "Agricultural Business and Management, General"
      },
      {
        "id": "cip-01-0102",
        "code": "01.0102",
        "title": "Agribusiness/Agricultural Business Operations"
      },
      {
        "id": "cip-01-0103",
        "code": "01.0103",
        "title": "Agricultural Economics"
      },
      {
        "id": "cip-01-0104",
        "code": "01.0104",
        "title": "Farm/Farm and Ranch Management"
      },
      {
        "id": "cip-01-0105",
        "code": "01.0105",
        "title": "Agricultural/Farm Supplies Retailing and Wholesaling"
      },
      {
        "id": "cip-01-0106",
        "code": "01.0106",
        "title": "Agricultural Business Technology"
      },
      {
        "id": "cip-01-0199",
        "code": "01.0199",
        "title": "Agricultural Business and Management, Other"
      }
    ]
  },
  {
    "code": "01.02",
    "title": "Agricultural Mechanization",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0201",
        "code": "01.0201",
        "title": "Agricultural Mechanization, General"
      },
      {
        "id": "cip-01-0204",
        "code": "01.0204",
        "title": "Agricultural Power Machinery Operation"
      },
      {
        "id": "cip-01-0205",
        "code": "01.0205",
        "title": "Agricultural Mechanics and Equipment/Machine Technology"
      },
      {
        "id": "cip-01-0299",
        "code": "01.0299",
        "title": "Agricultural Mechanization, Other"
      }
    ]
  },
  {
    "code": "01.03",
    "title": "Agricultural Production Operations",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0301",
        "code": "01.0301",
        "title": "Agricultural Production Operations, General"
      },
      {
        "id": "cip-01-0302",
        "code": "01.0302",
        "title": "Animal/Livestock Husbandry and Production"
      },
      {
        "id": "cip-01-0303",
        "code": "01.0303",
        "title": "Aquaculture"
      },
      {
        "id": "cip-01-0304",
        "code": "01.0304",
        "title": "Crop Production"
      },
      {
        "id": "cip-01-0306",
        "code": "01.0306",
        "title": "Dairy Husbandry and Production"
      },
      {
        "id": "cip-01-0307",
        "code": "01.0307",
        "title": "Horse Husbandry/Equine Science and Management"
      },
      {
        "id": "cip-01-0308",
        "code": "01.0308",
        "title": "Agroecology and Sustainable Agriculture"
      },
      {
        "id": "cip-01-0309",
        "code": "01.0309",
        "title": "Viticulture and Enology"
      },
      {
        "id": "cip-01-0399",
        "code": "01.0399",
        "title": "Agricultural Production Operations, Other"
      }
    ]
  },
  {
    "code": "01.04",
    "title": "Agricultural and Food Products Processing",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0401",
        "code": "01.0401",
        "title": "Agricultural and Food Products Processing"
      }
    ]
  },
  {
    "code": "01.05",
    "title": "Agricultural and Domestic Animal Services",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0504",
        "code": "01.0504",
        "title": "Dog/Pet/Animal Grooming"
      },
      {
        "id": "cip-01-0505",
        "code": "01.0505",
        "title": "Animal Training"
      },
      {
        "id": "cip-01-0507",
        "code": "01.0507",
        "title": "Equestrian/Equine Studies"
      },
      {
        "id": "cip-01-0508",
        "code": "01.0508",
        "title": "Taxidermy/Taxidermist"
      },
      {
        "id": "cip-01-0599",
        "code": "01.0599",
        "title": "Agricultural and Domestic Animal Services, Other"
      }
    ]
  },
  {
    "code": "01.06",
    "title": "Applied Horticulture and Horticultural Business Services",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0601",
        "code": "01.0601",
        "title": "Applied Horticulture/Horticulture Operations, General"
      },
      {
        "id": "cip-01-0603",
        "code": "01.0603",
        "title": "Ornamental Horticulture"
      },
      {
        "id": "cip-01-0604",
        "code": "01.0604",
        "title": "Greenhouse Operations and Management"
      },
      {
        "id": "cip-01-0605",
        "code": "01.0605",
        "title": "Landscaping and Groundskeeping"
      },
      {
        "id": "cip-01-0606",
        "code": "01.0606",
        "title": "Plant Nursery Operations and Management"
      },
      {
        "id": "cip-01-0607",
        "code": "01.0607",
        "title": "Turf and Turfgrass Management"
      },
      {
        "id": "cip-01-0608",
        "code": "01.0608",
        "title": "Floriculture/Floristry Operations and Management"
      },
      {
        "id": "cip-01-0699",
        "code": "01.0699",
        "title": "Applied Horticulture/Horticultural Business Services, Other"
      }
    ]
  },
  {
    "code": "01.07",
    "title": "International Agriculture",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0701",
        "code": "01.0701",
        "title": "International Agriculture"
      }
    ]
  },
  {
    "code": "01.08",
    "title": "Agricultural Public Services",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0801",
        "code": "01.0801",
        "title": "Agricultural and Extension Education Services"
      },
      {
        "id": "cip-01-0802",
        "code": "01.0802",
        "title": "Agricultural Communication/Journalism"
      },
      {
        "id": "cip-01-0899",
        "code": "01.0899",
        "title": "Agricultural Public Services, Other"
      }
    ]
  },
  {
    "code": "01.09",
    "title": "Animal Sciences",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-0901",
        "code": "01.0901",
        "title": "Animal Sciences, General"
      },
      {
        "id": "cip-01-0902",
        "code": "01.0902",
        "title": "Agricultural Animal Breeding"
      },
      {
        "id": "cip-01-0903",
        "code": "01.0903",
        "title": "Animal Health"
      },
      {
        "id": "cip-01-0904",
        "code": "01.0904",
        "title": "Animal Nutrition"
      },
      {
        "id": "cip-01-0905",
        "code": "01.0905",
        "title": "Dairy Science"
      },
      {
        "id": "cip-01-0906",
        "code": "01.0906",
        "title": "Livestock Management"
      },
      {
        "id": "cip-01-0907",
        "code": "01.0907",
        "title": "Poultry Science"
      },
      {
        "id": "cip-01-0999",
        "code": "01.0999",
        "title": "Animal Sciences, Other"
      }
    ]
  },
  {
    "code": "01.10",
    "title": "Food Science and Technology",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-1001",
        "code": "01.1001",
        "title": "Food Science"
      },
      {
        "id": "cip-01-1002",
        "code": "01.1002",
        "title": "Food Technology and Processing"
      },
      {
        "id": "cip-01-1099",
        "code": "01.1099",
        "title": "Food Science and Technology, Other"
      }
    ]
  },
  {
    "code": "01.11",
    "title": "Plant Sciences",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-1101",
        "code": "01.1101",
        "title": "Plant Sciences, General"
      },
      {
        "id": "cip-01-1102",
        "code": "01.1102",
        "title": "Agronomy and Crop Science"
      },
      {
        "id": "cip-01-1103",
        "code": "01.1103",
        "title": "Horticultural Science"
      },
      {
        "id": "cip-01-1104",
        "code": "01.1104",
        "title": "Agricultural and Horticultural Plant Breeding"
      },
      {
        "id": "cip-01-1105",
        "code": "01.1105",
        "title": "Plant Protection and Integrated Pest Management"
      },
      {
        "id": "cip-01-1106",
        "code": "01.1106",
        "title": "Range Science and Management"
      },
      {
        "id": "cip-01-1199",
        "code": "01.1199",
        "title": "Plant Sciences, Other"
      }
    ]
  },
  {
    "code": "01.12",
    "title": "Soil Sciences",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-1201",
        "code": "01.1201",
        "title": "Soil Science and Agronomy, General"
      },
      {
        "id": "cip-01-1202",
        "code": "01.1202",
        "title": "Soil Chemistry and Physics"
      },
      {
        "id": "cip-01-1203",
        "code": "01.1203",
        "title": "Soil Microbiology"
      },
      {
        "id": "cip-01-1299",
        "code": "01.1299",
        "title": "Soil Sciences, Other"
      }
    ]
  },
  {
    "code": "01.99",
    "title": "Agriculture, Agriculture Operations, and Related Sciences, Other",
    "parentCode": "01",
    "parentTitle": "AGRICULTURE, AGRICULTURE OPERATIONS, AND RELATED SCIENCES",
    "majors": [
      {
        "id": "cip-01-9999",
        "code": "01.9999",
        "title": "Agriculture, Agriculture Operations, and Related Sciences, Other"
      }
    ]
  },
  {
    "code": "03.01",
    "title": "Natural Resources Conservation and Research",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-0101",
        "code": "03.0101",
        "title": "Natural Resources/Conservation, General"
      },
      {
        "id": "cip-03-0103",
        "code": "03.0103",
        "title": "Environmental Studies"
      },
      {
        "id": "cip-03-0104",
        "code": "03.0104",
        "title": "Environmental Science"
      },
      {
        "id": "cip-03-0199",
        "code": "03.0199",
        "title": "Natural Resources Conservation and Research, Other"
      }
    ]
  },
  {
    "code": "03.02",
    "title": "Natural Resources Management and Policy",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-0201",
        "code": "03.0201",
        "title": "Natural Resources Management and Policy"
      },
      {
        "id": "cip-03-0204",
        "code": "03.0204",
        "title": "Natural Resource Economics"
      },
      {
        "id": "cip-03-0205",
        "code": "03.0205",
        "title": "Water, Wetlands, and Marine Resources Management"
      },
      {
        "id": "cip-03-0206",
        "code": "03.0206",
        "title": "Land Use Planning and Management/Development"
      },
      {
        "id": "cip-03-0207",
        "code": "03.0207",
        "title": "Natural Resource Recreation and Tourism"
      },
      {
        "id": "cip-03-0208",
        "code": "03.0208",
        "title": "Natural Resources Law Enforcement and Protective Services"
      },
      {
        "id": "cip-03-0299",
        "code": "03.0299",
        "title": "Natural Resources Management and Policy, Other"
      }
    ]
  },
  {
    "code": "03.03",
    "title": "Fishing and Fisheries Sciences and Management",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-0301",
        "code": "03.0301",
        "title": "Fishing and Fisheries Sciences and Management"
      }
    ]
  },
  {
    "code": "03.05",
    "title": "Forestry",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-0501",
        "code": "03.0501",
        "title": "Forestry, General"
      },
      {
        "id": "cip-03-0502",
        "code": "03.0502",
        "title": "Forest Sciences and Biology"
      },
      {
        "id": "cip-03-0506",
        "code": "03.0506",
        "title": "Forest Management/Forest Resources Management"
      },
      {
        "id": "cip-03-0508",
        "code": "03.0508",
        "title": "Urban Forestry"
      },
      {
        "id": "cip-03-0509",
        "code": "03.0509",
        "title": "Wood Science and Wood Products/Pulp and Paper Technology"
      },
      {
        "id": "cip-03-0510",
        "code": "03.0510",
        "title": "Forest Resources Production and Management"
      },
      {
        "id": "cip-03-0511",
        "code": "03.0511",
        "title": "Forest Technology/Technician"
      },
      {
        "id": "cip-03-0599",
        "code": "03.0599",
        "title": "Forestry, Other"
      }
    ]
  },
  {
    "code": "03.06",
    "title": "Wildlife and Wildlands Science and Management",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-0601",
        "code": "03.0601",
        "title": "Wildlife and Wildlands Science and Management"
      }
    ]
  },
  {
    "code": "03.99",
    "title": "Natural Resources and Conservation, Other",
    "parentCode": "03",
    "parentTitle": "NATURAL RESOURCES AND CONSERVATION",
    "majors": [
      {
        "id": "cip-03-9999",
        "code": "03.9999",
        "title": "Natural Resources and Conservation, Other"
      }
    ]
  },
  {
    "code": "04.02",
    "title": "Architecture",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0201",
        "code": "04.0201",
        "title": "Architecture (BArch, BA/BS, MArch, MA/MS, PhD)"
      }
    ]
  },
  {
    "code": "04.03",
    "title": "City/Urban, Community and Regional Planning",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0301",
        "code": "04.0301",
        "title": "City/Urban, Community and Regional Planning"
      }
    ]
  },
  {
    "code": "04.04",
    "title": "Environmental Design",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0401",
        "code": "04.0401",
        "title": "Environmental Design/Architecture"
      }
    ]
  },
  {
    "code": "04.05",
    "title": "Interior Architecture",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0501",
        "code": "04.0501",
        "title": "Interior Architecture"
      }
    ]
  },
  {
    "code": "04.06",
    "title": "Landscape Architecture",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0601",
        "code": "04.0601",
        "title": "Landscape Architecture (BS, BSLA, BLA, MSLA, MLA, PhD)"
      }
    ]
  },
  {
    "code": "04.08",
    "title": "Architectural History and Criticism",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0801",
        "code": "04.0801",
        "title": "Architectural History and Criticism, General"
      }
    ]
  },
  {
    "code": "04.09",
    "title": "Architectural Technology/Technician",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-0901",
        "code": "04.0901",
        "title": "Architectural Technology/Technician"
      },
      {
        "id": "cip-04-0902",
        "code": "04.0902",
        "title": "Architectural and Building Sciences/Technology"
      },
      {
        "id": "cip-04-0999",
        "code": "04.0999",
        "title": "Architectural Sciences and Technology, Other"
      }
    ]
  },
  {
    "code": "04.10",
    "title": "Real Estate Development",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-1001",
        "code": "04.1001",
        "title": "Real Estate Development"
      }
    ]
  },
  {
    "code": "04.99",
    "title": "Architecture and Related Services, Other",
    "parentCode": "04",
    "parentTitle": "ARCHITECTURE AND RELATED SERVICES",
    "majors": [
      {
        "id": "cip-04-9999",
        "code": "04.9999",
        "title": "Architecture and Related Services, Other"
      }
    ]
  },
  {
    "code": "05.01",
    "title": "Area Studies",
    "parentCode": "05",
    "parentTitle": "AREA, ETHNIC, CULTURAL, AND GENDER STUDIES",
    "majors": [
      {
        "id": "cip-05-0101",
        "code": "05.0101",
        "title": "African Studies"
      },
      {
        "id": "cip-05-0102",
        "code": "05.0102",
        "title": "American/United States Studies/Civilization"
      },
      {
        "id": "cip-05-0103",
        "code": "05.0103",
        "title": "Asian Studies/Civilization"
      },
      {
        "id": "cip-05-0104",
        "code": "05.0104",
        "title": "East Asian Studies"
      },
      {
        "id": "cip-05-0105",
        "code": "05.0105",
        "title": "Central/Middle and Eastern European Studies"
      },
      {
        "id": "cip-05-0106",
        "code": "05.0106",
        "title": "European Studies/Civilization"
      },
      {
        "id": "cip-05-0107",
        "code": "05.0107",
        "title": "Latin American Studies"
      },
      {
        "id": "cip-05-0108",
        "code": "05.0108",
        "title": "Near and Middle Eastern Studies"
      },
      {
        "id": "cip-05-0109",
        "code": "05.0109",
        "title": "Pacific Area/Pacific Rim Studies"
      },
      {
        "id": "cip-05-0110",
        "code": "05.0110",
        "title": "Russian Studies"
      },
      {
        "id": "cip-05-0111",
        "code": "05.0111",
        "title": "Scandinavian Studies"
      },
      {
        "id": "cip-05-0112",
        "code": "05.0112",
        "title": "South Asian Studies"
      },
      {
        "id": "cip-05-0113",
        "code": "05.0113",
        "title": "Southeast Asian Studies"
      },
      {
        "id": "cip-05-0114",
        "code": "05.0114",
        "title": "Western European Studies"
      },
      {
        "id": "cip-05-0115",
        "code": "05.0115",
        "title": "Canadian Studies"
      },
      {
        "id": "cip-05-0116",
        "code": "05.0116",
        "title": "Balkans Studies"
      },
      {
        "id": "cip-05-0117",
        "code": "05.0117",
        "title": "Baltic Studies"
      },
      {
        "id": "cip-05-0118",
        "code": "05.0118",
        "title": "Slavic Studies"
      },
      {
        "id": "cip-05-0119",
        "code": "05.0119",
        "title": "Caribbean Studies"
      },
      {
        "id": "cip-05-0120",
        "code": "05.0120",
        "title": "Ural-Altaic and Central Asian Studies"
      },
      {
        "id": "cip-05-0121",
        "code": "05.0121",
        "title": "Commonwealth Studies"
      },
      {
        "id": "cip-05-0122",
        "code": "05.0122",
        "title": "Regional Studies (U.S., Canadian, Foreign)"
      },
      {
        "id": "cip-05-0123",
        "code": "05.0123",
        "title": "Chinese Studies"
      },
      {
        "id": "cip-05-0124",
        "code": "05.0124",
        "title": "French Studies"
      },
      {
        "id": "cip-05-0125",
        "code": "05.0125",
        "title": "German Studies"
      },
      {
        "id": "cip-05-0126",
        "code": "05.0126",
        "title": "Italian Studies"
      },
      {
        "id": "cip-05-0127",
        "code": "05.0127",
        "title": "Japanese Studies"
      },
      {
        "id": "cip-05-0128",
        "code": "05.0128",
        "title": "Korean Studies"
      },
      {
        "id": "cip-05-0129",
        "code": "05.0129",
        "title": "Polish Studies"
      },
      {
        "id": "cip-05-0130",
        "code": "05.0130",
        "title": "Spanish and Iberian Studies"
      },
      {
        "id": "cip-05-0131",
        "code": "05.0131",
        "title": "Tibetan Studies"
      },
      {
        "id": "cip-05-0132",
        "code": "05.0132",
        "title": "Ukraine Studies"
      },
      {
        "id": "cip-05-0133",
        "code": "05.0133",
        "title": "Irish Studies"
      },
      {
        "id": "cip-05-0134",
        "code": "05.0134",
        "title": "Latin American and Caribbean Studies"
      },
      {
        "id": "cip-05-0199",
        "code": "05.0199",
        "title": "Area Studies, Other"
      }
    ]
  },
  {
    "code": "05.02",
    "title": "Ethnic, Cultural Minority, and Gender Studies",
    "parentCode": "05",
    "parentTitle": "AREA, ETHNIC, CULTURAL, AND GENDER STUDIES",
    "majors": [
      {
        "id": "cip-05-0200",
        "code": "05.0200",
        "title": "Ethnic Studies"
      },
      {
        "id": "cip-05-0201",
        "code": "05.0201",
        "title": "African-American/Black Studies"
      },
      {
        "id": "cip-05-0202",
        "code": "05.0202",
        "title": "American Indian/Native American Studies"
      },
      {
        "id": "cip-05-0203",
        "code": "05.0203",
        "title": "Hispanic-American, Puerto Rican, and Mexican-American/Chicano Studies"
      },
      {
        "id": "cip-05-0206",
        "code": "05.0206",
        "title": "Asian-American Studies"
      },
      {
        "id": "cip-05-0207",
        "code": "05.0207",
        "title": "Women's Studies"
      },
      {
        "id": "cip-05-0208",
        "code": "05.0208",
        "title": "Gay/Lesbian Studies"
      },
      {
        "id": "cip-05-0209",
        "code": "05.0209",
        "title": "Folklore Studies"
      },
      {
        "id": "cip-05-0210",
        "code": "05.0210",
        "title": "Disability Studies"
      },
      {
        "id": "cip-05-0211",
        "code": "05.0211",
        "title": "Deaf Studies"
      },
      {
        "id": "cip-05-0299",
        "code": "05.0299",
        "title": "Ethnic, Cultural Minority, and Gender Studies, Other"
      }
    ]
  },
  {
    "code": "09.01",
    "title": "Communication and Media Studies",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-0100",
        "code": "09.0100",
        "title": "Communication, General"
      },
      {
        "id": "cip-09-0101",
        "code": "09.0101",
        "title": "Communication Studies/Speech Communication and Rhetoric"
      },
      {
        "id": "cip-09-0102",
        "code": "09.0102",
        "title": "Mass Communication/Media Studies"
      },
      {
        "id": "cip-09-0199",
        "code": "09.0199",
        "title": "Communication and Media Studies, Other"
      }
    ]
  },
  {
    "code": "09.04",
    "title": "Journalism",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-0401",
        "code": "09.0401",
        "title": "Journalism"
      },
      {
        "id": "cip-09-0402",
        "code": "09.0402",
        "title": "Broadcast Journalism"
      },
      {
        "id": "cip-09-0404",
        "code": "09.0404",
        "title": "Photojournalism"
      },
      {
        "id": "cip-09-0499",
        "code": "09.0499",
        "title": "Journalism, Other"
      }
    ]
  },
  {
    "code": "09.07",
    "title": "Radio, Television, and Digital Communication",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-0701",
        "code": "09.0701",
        "title": "Radio and Television"
      },
      {
        "id": "cip-09-0702",
        "code": "09.0702",
        "title": "Digital Communication and Media/Multimedia"
      },
      {
        "id": "cip-09-0799",
        "code": "09.0799",
        "title": "Radio, Television, and Digital Communication, Other"
      }
    ]
  },
  {
    "code": "09.09",
    "title": "Public Relations, Advertising, and Applied Communication",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-0900",
        "code": "09.0900",
        "title": "Public Relations, Advertising, and Applied Communication"
      },
      {
        "id": "cip-09-0901",
        "code": "09.0901",
        "title": "Organizational Communication, General"
      },
      {
        "id": "cip-09-0902",
        "code": "09.0902",
        "title": "Public Relations/Image Management"
      },
      {
        "id": "cip-09-0903",
        "code": "09.0903",
        "title": "Advertising"
      },
      {
        "id": "cip-09-0904",
        "code": "09.0904",
        "title": "Political Communication"
      },
      {
        "id": "cip-09-0905",
        "code": "09.0905",
        "title": "Health Communication"
      },
      {
        "id": "cip-09-0906",
        "code": "09.0906",
        "title": "Sports Communication"
      },
      {
        "id": "cip-09-0907",
        "code": "09.0907",
        "title": "International and Intercultural Communication"
      },
      {
        "id": "cip-09-0908",
        "code": "09.0908",
        "title": "Technical and Scientific Communication"
      },
      {
        "id": "cip-09-0999",
        "code": "09.0999",
        "title": "Public Relations, Advertising, and Applied Communication, Other"
      }
    ]
  },
  {
    "code": "09.10",
    "title": "Publishing",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-1001",
        "code": "09.1001",
        "title": "Publishing"
      }
    ]
  },
  {
    "code": "09.99",
    "title": "Communication, Journalism, and Related Programs, Other",
    "parentCode": "09",
    "parentTitle": "COMMUNICATION, JOURNALISM, AND RELATED PROGRAMS",
    "majors": [
      {
        "id": "cip-09-9999",
        "code": "09.9999",
        "title": "Communication, Journalism, and Related Programs, Other"
      }
    ]
  },
  {
    "code": "10.01",
    "title": "Communications Technology/Technician",
    "parentCode": "10",
    "parentTitle": "COMMUNICATIONS TECHNOLOGIES/TECHNICIANS AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-10-0105",
        "code": "10.0105",
        "title": "Communications Technology/Technician"
      }
    ]
  },
  {
    "code": "10.02",
    "title": "Audiovisual Communications Technologies/Technicians",
    "parentCode": "10",
    "parentTitle": "COMMUNICATIONS TECHNOLOGIES/TECHNICIANS AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-10-0201",
        "code": "10.0201",
        "title": "Photographic and Film/Video Technology/Technician and Assistant"
      },
      {
        "id": "cip-10-0202",
        "code": "10.0202",
        "title": "Radio and Television Broadcasting Technology/Technician"
      },
      {
        "id": "cip-10-0203",
        "code": "10.0203",
        "title": "Recording Arts Technology/Technician"
      },
      {
        "id": "cip-10-0299",
        "code": "10.0299",
        "title": "Audiovisual Communications Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "10.03",
    "title": "Graphic Communications",
    "parentCode": "10",
    "parentTitle": "COMMUNICATIONS TECHNOLOGIES/TECHNICIANS AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-10-0301",
        "code": "10.0301",
        "title": "Graphic Communications, General"
      },
      {
        "id": "cip-10-0302",
        "code": "10.0302",
        "title": "Printing Management"
      },
      {
        "id": "cip-10-0303",
        "code": "10.0303",
        "title": "Prepress/Desktop Publishing and Digital Imaging Design"
      },
      {
        "id": "cip-10-0304",
        "code": "10.0304",
        "title": "Animation, Interactive Technology, Video Graphics and Special Effects"
      },
      {
        "id": "cip-10-0305",
        "code": "10.0305",
        "title": "Graphic and Printing Equipment Operator, General Production"
      },
      {
        "id": "cip-10-0306",
        "code": "10.0306",
        "title": "Platemaker/Imager"
      },
      {
        "id": "cip-10-0307",
        "code": "10.0307",
        "title": "Printing Press Operator"
      },
      {
        "id": "cip-10-0308",
        "code": "10.0308",
        "title": "Computer Typography and Composition Equipment Operator"
      },
      {
        "id": "cip-10-0399",
        "code": "10.0399",
        "title": "Graphic Communications, Other"
      }
    ]
  },
  {
    "code": "10.99",
    "title": "Communications Technologies/Technicians and Support Services, Other",
    "parentCode": "10",
    "parentTitle": "COMMUNICATIONS TECHNOLOGIES/TECHNICIANS AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-10-9999",
        "code": "10.9999",
        "title": "Communications Technologies/Technicians and Support Services, Other"
      }
    ]
  },
  {
    "code": "11.01",
    "title": "Computer and Information Sciences, General ",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0101",
        "code": "11.0101",
        "title": "Computer and Information Sciences, General"
      },
      {
        "id": "cip-11-0102",
        "code": "11.0102",
        "title": "Artificial Intelligence and Robotics"
      },
      {
        "id": "cip-11-0103",
        "code": "11.0103",
        "title": "Information Technology"
      },
      {
        "id": "cip-11-0104",
        "code": "11.0104",
        "title": "Informatics"
      },
      {
        "id": "cip-11-0199",
        "code": "11.0199",
        "title": "Computer and Information Sciences, Other"
      }
    ]
  },
  {
    "code": "11.02",
    "title": "Computer Programming",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0201",
        "code": "11.0201",
        "title": "Computer Programming/Programmer, General"
      },
      {
        "id": "cip-11-0202",
        "code": "11.0202",
        "title": "Computer Programming, Specific Applications"
      },
      {
        "id": "cip-11-0203",
        "code": "11.0203",
        "title": "Computer Programming, Vendor/Product Certification"
      },
      {
        "id": "cip-11-0299",
        "code": "11.0299",
        "title": "Computer Programming, Other"
      }
    ]
  },
  {
    "code": "11.03",
    "title": "Data Processing",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0301",
        "code": "11.0301",
        "title": "Data Processing and Data Processing Technology/Technician"
      }
    ]
  },
  {
    "code": "11.04",
    "title": "Information Science/Studies",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0401",
        "code": "11.0401",
        "title": "Information Science/Studies"
      }
    ]
  },
  {
    "code": "11.05",
    "title": "Computer Systems Analysis",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0501",
        "code": "11.0501",
        "title": "Computer Systems Analysis/Analyst"
      }
    ]
  },
  {
    "code": "11.06",
    "title": "Data Entry/Microcomputer Applications",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0601",
        "code": "11.0601",
        "title": "Data Entry/Microcomputer Applications, General"
      },
      {
        "id": "cip-11-0602",
        "code": "11.0602",
        "title": "Word Processing"
      },
      {
        "id": "cip-11-0699",
        "code": "11.0699",
        "title": "Data Entry/Microcomputer Applications, Other"
      }
    ]
  },
  {
    "code": "11.07",
    "title": "Computer Science",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0701",
        "code": "11.0701",
        "title": "Computer Science"
      }
    ]
  },
  {
    "code": "11.08",
    "title": "Computer Software and Media Applications",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0801",
        "code": "11.0801",
        "title": "Web Page, Digital/Multimedia and Information Resources Design"
      },
      {
        "id": "cip-11-0802",
        "code": "11.0802",
        "title": "Data Modeling/Warehousing and Database Administration"
      },
      {
        "id": "cip-11-0803",
        "code": "11.0803",
        "title": "Computer Graphics"
      },
      {
        "id": "cip-11-0804",
        "code": "11.0804",
        "title": "Modeling, Virtual Environments and Simulation"
      },
      {
        "id": "cip-11-0899",
        "code": "11.0899",
        "title": "Computer Software and Media Applications, Other"
      }
    ]
  },
  {
    "code": "11.09",
    "title": "Computer Systems Networking and Telecommunications",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-0901",
        "code": "11.0901",
        "title": "Computer Systems Networking and Telecommunications"
      }
    ]
  },
  {
    "code": "11.10",
    "title": "Computer/Information Technology Administration and Management",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-1001",
        "code": "11.1001",
        "title": "System Administration/Administrator"
      },
      {
        "id": "cip-11-1002",
        "code": "11.1002",
        "title": "System, Networking, and LAN/WAN Management/Manager"
      },
      {
        "id": "cip-11-1003",
        "code": "11.1003",
        "title": "Computer and Information Systems Security"
      },
      {
        "id": "cip-11-1004",
        "code": "11.1004",
        "title": "Web/Multimedia Management and Webmaster"
      },
      {
        "id": "cip-11-1005",
        "code": "11.1005",
        "title": "Information Technology Project Management"
      },
      {
        "id": "cip-11-1006",
        "code": "11.1006",
        "title": "Computer Support Specialist"
      },
      {
        "id": "cip-11-1099",
        "code": "11.1099",
        "title": "Computer/Information Technology Services Administration andManagement, Other"
      }
    ]
  },
  {
    "code": "11.99",
    "title": "Computer and Information Sciences and Support Services, Other",
    "parentCode": "11",
    "parentTitle": "COMPUTER AND INFORMATION SCIENCES AND SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-11-9999",
        "code": "11.9999",
        "title": "Computer and Information Sciences and Support Services, Other"
      }
    ]
  },
  {
    "code": "12.03",
    "title": "Funeral Service and Mortuary Science",
    "parentCode": "12",
    "parentTitle": "PERSONAL AND CULINARY SERVICES",
    "majors": [
      {
        "id": "cip-12-0301",
        "code": "12.0301",
        "title": "Funeral Service and Mortuary Science, General"
      },
      {
        "id": "cip-12-0302",
        "code": "12.0302",
        "title": "Funeral Direction/Service"
      },
      {
        "id": "cip-12-0303",
        "code": "12.0303",
        "title": "Mortuary Science and Embalming/Embalmer"
      },
      {
        "id": "cip-12-0399",
        "code": "12.0399",
        "title": "Funeral Service and Mortuary Science, Other"
      }
    ]
  },
  {
    "code": "12.04",
    "title": "Cosmetology and Related Personal Grooming Services",
    "parentCode": "12",
    "parentTitle": "PERSONAL AND CULINARY SERVICES",
    "majors": [
      {
        "id": "cip-12-0401",
        "code": "12.0401",
        "title": "Cosmetology/Cosmetologist, General"
      },
      {
        "id": "cip-12-0402",
        "code": "12.0402",
        "title": "Barbering/Barber"
      },
      {
        "id": "cip-12-0404",
        "code": "12.0404",
        "title": "Electrolysis/Electrology and Electrolysis Technician"
      },
      {
        "id": "cip-12-0406",
        "code": "12.0406",
        "title": "Make-Up Artist/Specialist"
      },
      {
        "id": "cip-12-0407",
        "code": "12.0407",
        "title": "Hair Styling/Stylist and Hair Design"
      },
      {
        "id": "cip-12-0408",
        "code": "12.0408",
        "title": "Facial Treatment Specialist/Facialist"
      },
      {
        "id": "cip-12-0409",
        "code": "12.0409",
        "title": "Aesthetician/Esthetician and Skin Care Specialist"
      },
      {
        "id": "cip-12-0410",
        "code": "12.0410",
        "title": "Nail Technician/Specialist and Manicurist"
      },
      {
        "id": "cip-12-0411",
        "code": "12.0411",
        "title": "Permanent Cosmetics/Makeup and Tattooing"
      },
      {
        "id": "cip-12-0412",
        "code": "12.0412",
        "title": "Salon/Beauty Salon Management/Manager"
      },
      {
        "id": "cip-12-0413",
        "code": "12.0413",
        "title": "Cosmetology, Barber/Styling, and Nail Instructor"
      },
      {
        "id": "cip-12-0414",
        "code": "12.0414",
        "title": "Master Aesthetician/Esthetician"
      },
      {
        "id": "cip-12-0499",
        "code": "12.0499",
        "title": "Cosmetology and Related Personal Grooming Arts, Other"
      }
    ]
  },
  {
    "code": "12.05",
    "title": "Culinary Arts and Related Services",
    "parentCode": "12",
    "parentTitle": "PERSONAL AND CULINARY SERVICES",
    "majors": [
      {
        "id": "cip-12-0500",
        "code": "12.0500",
        "title": "Cooking and Related Culinary Arts, General"
      },
      {
        "id": "cip-12-0501",
        "code": "12.0501",
        "title": "Baking and Pastry Arts/Baker/Pastry Chef"
      },
      {
        "id": "cip-12-0502",
        "code": "12.0502",
        "title": "Bartending/Bartender"
      },
      {
        "id": "cip-12-0503",
        "code": "12.0503",
        "title": "Culinary Arts/Chef Training"
      },
      {
        "id": "cip-12-0504",
        "code": "12.0504",
        "title": "Restaurant, Culinary, and Catering Management/Manager"
      },
      {
        "id": "cip-12-0505",
        "code": "12.0505",
        "title": "Food Preparation/Professional Cooking/Kitchen Assistant"
      },
      {
        "id": "cip-12-0506",
        "code": "12.0506",
        "title": "Meat Cutting/Meat Cutter"
      },
      {
        "id": "cip-12-0507",
        "code": "12.0507",
        "title": "Food Service, Waiter/Waitress, and Dining Room Management/Manager"
      },
      {
        "id": "cip-12-0508",
        "code": "12.0508",
        "title": "Institutional Food Workers"
      },
      {
        "id": "cip-12-0509",
        "code": "12.0509",
        "title": "Culinary Science/Culinology"
      },
      {
        "id": "cip-12-0510",
        "code": "12.0510",
        "title": "Wine Steward/Sommelier"
      },
      {
        "id": "cip-12-0599",
        "code": "12.0599",
        "title": "Culinary Arts and Related Services, Other"
      }
    ]
  },
  {
    "code": "12.99",
    "title": "Personal and Culinary Services, Other",
    "parentCode": "12",
    "parentTitle": "PERSONAL AND CULINARY SERVICES",
    "majors": [
      {
        "id": "cip-12-9999",
        "code": "12.9999",
        "title": "Personal and Culinary Services, Other"
      }
    ]
  },
  {
    "code": "13.01",
    "title": "Education, General",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0101",
        "code": "13.0101",
        "title": "Education, General"
      }
    ]
  },
  {
    "code": "13.02",
    "title": "Bilingual, Multilingual, and Multicultural Education",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0201",
        "code": "13.0201",
        "title": "Bilingual and Multilingual Education"
      },
      {
        "id": "cip-13-0202",
        "code": "13.0202",
        "title": "Multicultural Education"
      },
      {
        "id": "cip-13-0203",
        "code": "13.0203",
        "title": "Indian/Native American Education"
      },
      {
        "id": "cip-13-0299",
        "code": "13.0299",
        "title": "Bilingual, Multilingual, and Multicultural Education, Other"
      }
    ]
  },
  {
    "code": "13.03",
    "title": "Curriculum and Instruction",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0301",
        "code": "13.0301",
        "title": "Curriculum and Instruction"
      }
    ]
  },
  {
    "code": "13.04",
    "title": "Educational Administration and Supervision",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0401",
        "code": "13.0401",
        "title": "Educational Leadership and Administration, General"
      },
      {
        "id": "cip-13-0402",
        "code": "13.0402",
        "title": "Administration of Special Education"
      },
      {
        "id": "cip-13-0403",
        "code": "13.0403",
        "title": "Adult and Continuing Education Administration"
      },
      {
        "id": "cip-13-0404",
        "code": "13.0404",
        "title": "Educational, Instructional, and Curriculum Supervision"
      },
      {
        "id": "cip-13-0406",
        "code": "13.0406",
        "title": "Higher Education/Higher Education Administration"
      },
      {
        "id": "cip-13-0407",
        "code": "13.0407",
        "title": "Community College Education"
      },
      {
        "id": "cip-13-0408",
        "code": "13.0408",
        "title": "Elementary and Middle School Administration/Principalship"
      },
      {
        "id": "cip-13-0409",
        "code": "13.0409",
        "title": "Secondary School Administration/Principalship"
      },
      {
        "id": "cip-13-0410",
        "code": "13.0410",
        "title": "Urban Education and Leadership"
      },
      {
        "id": "cip-13-0411",
        "code": "13.0411",
        "title": "Superintendency and Educational System Administration"
      },
      {
        "id": "cip-13-0499",
        "code": "13.0499",
        "title": "Educational Administration and Supervision, Other"
      }
    ]
  },
  {
    "code": "13.05",
    "title": "Educational/Instructional Media Design",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0501",
        "code": "13.0501",
        "title": "Educational/Instructional Media Design"
      }
    ]
  },
  {
    "code": "13.06",
    "title": "Educational Assessment, Evaluation, and Research",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0601",
        "code": "13.0601",
        "title": "Educational Evaluation and Research"
      },
      {
        "id": "cip-13-0603",
        "code": "13.0603",
        "title": "Educational Statistics and Research Methods"
      },
      {
        "id": "cip-13-0604",
        "code": "13.0604",
        "title": "Educational Assessment, Testing, and Measurement"
      },
      {
        "id": "cip-13-0607",
        "code": "13.0607",
        "title": "Learning Sciences"
      },
      {
        "id": "cip-13-0699",
        "code": "13.0699",
        "title": "Educational Assessment, Evaluation, and Research, Other"
      }
    ]
  },
  {
    "code": "13.07",
    "title": "International and Comparative Education",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0701",
        "code": "13.0701",
        "title": "International and Comparative Education"
      }
    ]
  },
  {
    "code": "13.09",
    "title": "Social and Philosophical Foundations of Education",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-0901",
        "code": "13.0901",
        "title": "Social and Philosophical Foundations of Education"
      }
    ]
  },
  {
    "code": "13.10",
    "title": "Special Education and Teaching",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1001",
        "code": "13.1001",
        "title": "Special Education and Teaching, General"
      },
      {
        "id": "cip-13-1003",
        "code": "13.1003",
        "title": "Education/Teaching of Individuals with Hearing Impairments Including Deafness"
      },
      {
        "id": "cip-13-1004",
        "code": "13.1004",
        "title": "Education/Teaching of the Gifted and Talented"
      },
      {
        "id": "cip-13-1005",
        "code": "13.1005",
        "title": "Education/Teaching of Individuals with Emotional Disturbances"
      },
      {
        "id": "cip-13-1006",
        "code": "13.1006",
        "title": "Education/Teaching of Individuals with Mental Retardation"
      },
      {
        "id": "cip-13-1007",
        "code": "13.1007",
        "title": "Education/Teaching of Individuals with Multiple Disabilities"
      },
      {
        "id": "cip-13-1008",
        "code": "13.1008",
        "title": "Education/Teaching of Individuals with Orthopedic and Other Physical Health Impairments"
      },
      {
        "id": "cip-13-1009",
        "code": "13.1009",
        "title": "Education/Teaching of Individuals with Vision Impairments Including Blindness"
      },
      {
        "id": "cip-13-1011",
        "code": "13.1011",
        "title": "Education/Teaching of Individuals with Specific Learning Disabilities"
      },
      {
        "id": "cip-13-1012",
        "code": "13.1012",
        "title": "Education/Teaching of Individuals with Speech or Language Impairments"
      },
      {
        "id": "cip-13-1013",
        "code": "13.1013",
        "title": "Education/Teaching of Individuals with Autism"
      },
      {
        "id": "cip-13-1014",
        "code": "13.1014",
        "title": "Education/Teaching of Individuals Who are Developmentally Delayed"
      },
      {
        "id": "cip-13-1015",
        "code": "13.1015",
        "title": "Education/Teaching of Individuals in Early Childhood Special Education Programs"
      },
      {
        "id": "cip-13-1016",
        "code": "13.1016",
        "title": "Education/Teaching of Individuals with Traumatic Brain Injuries"
      },
      {
        "id": "cip-13-1017",
        "code": "13.1017",
        "title": "Education/Teaching of Individuals in Elementary Special Education Programs"
      },
      {
        "id": "cip-13-1018",
        "code": "13.1018",
        "title": "Education/Teaching of Individuals in Junior High/Middle School Special Education Programs"
      },
      {
        "id": "cip-13-1019",
        "code": "13.1019",
        "title": "Education/Teaching of Individuals in Secondary Special Education Programs"
      },
      {
        "id": "cip-13-1099",
        "code": "13.1099",
        "title": "Special Education and Teaching, Other"
      }
    ]
  },
  {
    "code": "13.11",
    "title": "Student Counseling and Personnel Services",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1101",
        "code": "13.1101",
        "title": "Counselor Education/School Counseling and Guidance Services"
      },
      {
        "id": "cip-13-1102",
        "code": "13.1102",
        "title": "College Student Counseling and Personnel Services"
      },
      {
        "id": "cip-13-1199",
        "code": "13.1199",
        "title": "Student Counseling and Personnel Services, Other"
      }
    ]
  },
  {
    "code": "13.12",
    "title": "Teacher Education and Professional Development, Specific Levels and Methods",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1201",
        "code": "13.1201",
        "title": "Adult and Continuing Education and Teaching"
      },
      {
        "id": "cip-13-1202",
        "code": "13.1202",
        "title": "Elementary Education and Teaching"
      },
      {
        "id": "cip-13-1203",
        "code": "13.1203",
        "title": "Junior High/Intermediate/Middle School Education and Teaching"
      },
      {
        "id": "cip-13-1205",
        "code": "13.1205",
        "title": "Secondary Education and Teaching"
      },
      {
        "id": "cip-13-1206",
        "code": "13.1206",
        "title": "Teacher Education, Multiple Levels"
      },
      {
        "id": "cip-13-1207",
        "code": "13.1207",
        "title": "Montessori Teacher Education"
      },
      {
        "id": "cip-13-1208",
        "code": "13.1208",
        "title": "Waldorf/Steiner Teacher Education"
      },
      {
        "id": "cip-13-1209",
        "code": "13.1209",
        "title": "Kindergarten/Preschool Education and Teaching"
      },
      {
        "id": "cip-13-1210",
        "code": "13.1210",
        "title": "Early Childhood Education and Teaching"
      },
      {
        "id": "cip-13-1299",
        "code": "13.1299",
        "title": "Teacher Education and Professional Development, Specific Levels and Methods, Other"
      }
    ]
  },
  {
    "code": "13.13",
    "title": "Teacher Education and Professional Development, Specific Subject Areas",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1301",
        "code": "13.1301",
        "title": "Agricultural Teacher Education"
      },
      {
        "id": "cip-13-1302",
        "code": "13.1302",
        "title": "Art Teacher Education"
      },
      {
        "id": "cip-13-1303",
        "code": "13.1303",
        "title": "Business Teacher Education"
      },
      {
        "id": "cip-13-1304",
        "code": "13.1304",
        "title": "Driver and Safety Teacher Education"
      },
      {
        "id": "cip-13-1305",
        "code": "13.1305",
        "title": "English/Language Arts Teacher Education"
      },
      {
        "id": "cip-13-1306",
        "code": "13.1306",
        "title": "Foreign Language Teacher Education"
      },
      {
        "id": "cip-13-1307",
        "code": "13.1307",
        "title": "Health Teacher Education"
      },
      {
        "id": "cip-13-1308",
        "code": "13.1308",
        "title": "Family and Consumer Sciences/Home Economics Teacher Education"
      },
      {
        "id": "cip-13-1309",
        "code": "13.1309",
        "title": "Technology Teacher Education/Industrial Arts Teacher Education"
      },
      {
        "id": "cip-13-1310",
        "code": "13.1310",
        "title": "Sales and Marketing Operations/Marketing and Distribution Teacher Education"
      },
      {
        "id": "cip-13-1311",
        "code": "13.1311",
        "title": "Mathematics Teacher Education"
      },
      {
        "id": "cip-13-1312",
        "code": "13.1312",
        "title": "Music Teacher Education"
      },
      {
        "id": "cip-13-1314",
        "code": "13.1314",
        "title": "Physical Education Teaching and Coaching"
      },
      {
        "id": "cip-13-1315",
        "code": "13.1315",
        "title": "Reading Teacher Education"
      },
      {
        "id": "cip-13-1316",
        "code": "13.1316",
        "title": "Science Teacher Education/General Science Teacher Education"
      },
      {
        "id": "cip-13-1317",
        "code": "13.1317",
        "title": "Social Science Teacher Education"
      },
      {
        "id": "cip-13-1318",
        "code": "13.1318",
        "title": "Social Studies Teacher Education"
      },
      {
        "id": "cip-13-1319",
        "code": "13.1319",
        "title": "Technical Teacher Education"
      },
      {
        "id": "cip-13-1320",
        "code": "13.1320",
        "title": "Trade and Industrial Teacher Education"
      },
      {
        "id": "cip-13-1321",
        "code": "13.1321",
        "title": "Computer Teacher Education"
      },
      {
        "id": "cip-13-1322",
        "code": "13.1322",
        "title": "Biology Teacher Education"
      },
      {
        "id": "cip-13-1323",
        "code": "13.1323",
        "title": "Chemistry Teacher Education"
      },
      {
        "id": "cip-13-1324",
        "code": "13.1324",
        "title": "Drama and Dance Teacher Education"
      },
      {
        "id": "cip-13-1325",
        "code": "13.1325",
        "title": "French Language Teacher Education"
      },
      {
        "id": "cip-13-1326",
        "code": "13.1326",
        "title": "German Language Teacher Education"
      },
      {
        "id": "cip-13-1327",
        "code": "13.1327",
        "title": "Health Occupations Teacher Education"
      },
      {
        "id": "cip-13-1328",
        "code": "13.1328",
        "title": "History Teacher Education"
      },
      {
        "id": "cip-13-1329",
        "code": "13.1329",
        "title": "Physics Teacher Education"
      },
      {
        "id": "cip-13-1330",
        "code": "13.1330",
        "title": "Spanish Language Teacher Education"
      },
      {
        "id": "cip-13-1331",
        "code": "13.1331",
        "title": "Speech Teacher Education"
      },
      {
        "id": "cip-13-1332",
        "code": "13.1332",
        "title": "Geography Teacher Education"
      },
      {
        "id": "cip-13-1333",
        "code": "13.1333",
        "title": "Latin Teacher Education"
      },
      {
        "id": "cip-13-1334",
        "code": "13.1334",
        "title": "School Librarian/School Library Media Specialist"
      },
      {
        "id": "cip-13-1335",
        "code": "13.1335",
        "title": "Psychology Teacher Education"
      },
      {
        "id": "cip-13-1337",
        "code": "13.1337",
        "title": "Earth Science Teacher Education"
      },
      {
        "id": "cip-13-1338",
        "code": "13.1338",
        "title": "Environmental Education"
      },
      {
        "id": "cip-13-1399",
        "code": "13.1399",
        "title": "Teacher Education and Professional Development, Specific Subject Areas, Other"
      }
    ]
  },
  {
    "code": "13.14",
    "title": "Teaching English or French as a Second or Foreign Language",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1401",
        "code": "13.1401",
        "title": "Teaching English as a Second or Foreign Language/ESL Language Instructor"
      },
      {
        "id": "cip-13-1402",
        "code": "13.1402",
        "title": "Teaching French as a Second or Foreign Language"
      },
      {
        "id": "cip-13-1499",
        "code": "13.1499",
        "title": "Teaching English or French as a Second or Foreign Language, Other"
      }
    ]
  },
  {
    "code": "13.15",
    "title": "Teaching Assistants/Aides",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-1501",
        "code": "13.1501",
        "title": "Teacher Assistant/Aide"
      },
      {
        "id": "cip-13-1502",
        "code": "13.1502",
        "title": "Adult Literacy Tutor/Instructor"
      },
      {
        "id": "cip-13-1599",
        "code": "13.1599",
        "title": "Teaching Assistants/Aides, Other"
      }
    ]
  },
  {
    "code": "13.99",
    "title": "Education, Other",
    "parentCode": "13",
    "parentTitle": "EDUCATION",
    "majors": [
      {
        "id": "cip-13-9999",
        "code": "13.9999",
        "title": "Education, Other"
      }
    ]
  },
  {
    "code": "14.01",
    "title": "Engineering, General",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0101",
        "code": "14.0101",
        "title": "Engineering, General"
      },
      {
        "id": "cip-14-0102",
        "code": "14.0102",
        "title": "Pre-Engineering"
      }
    ]
  },
  {
    "code": "14.02",
    "title": "Aerospace, Aeronautical and Astronautical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0201",
        "code": "14.0201",
        "title": "Aerospace, Aeronautical and Astronautical Engineering"
      }
    ]
  },
  {
    "code": "14.03",
    "title": "Agricultural/Biological Engineering and Bioengineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0301",
        "code": "14.0301",
        "title": "Agricultural/Biological Engineering and Bioengineering"
      }
    ]
  },
  {
    "code": "14.04",
    "title": "Architectural Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0401",
        "code": "14.0401",
        "title": "Architectural Engineering"
      }
    ]
  },
  {
    "code": "14.05",
    "title": "Biomedical/Medical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0501",
        "code": "14.0501",
        "title": "Biomedical/Medical Engineering"
      }
    ]
  },
  {
    "code": "14.06",
    "title": "Ceramic Sciences and Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0601",
        "code": "14.0601",
        "title": "Ceramic Sciences and Engineering"
      }
    ]
  },
  {
    "code": "14.07",
    "title": "Chemical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0701",
        "code": "14.0701",
        "title": "Chemical Engineering"
      },
      {
        "id": "cip-14-0702",
        "code": "14.0702",
        "title": "Chemical and Biomolecular Engineering"
      },
      {
        "id": "cip-14-0799",
        "code": "14.0799",
        "title": "Chemical Engineering, Other"
      }
    ]
  },
  {
    "code": "14.08",
    "title": "Civil Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0801",
        "code": "14.0801",
        "title": "Civil Engineering, General"
      },
      {
        "id": "cip-14-0802",
        "code": "14.0802",
        "title": "Geotechnical Engineering"
      },
      {
        "id": "cip-14-0803",
        "code": "14.0803",
        "title": "Structural Engineering"
      },
      {
        "id": "cip-14-0804",
        "code": "14.0804",
        "title": "Transportation and Highway Engineering"
      },
      {
        "id": "cip-14-0805",
        "code": "14.0805",
        "title": "Water Resources Engineering"
      },
      {
        "id": "cip-14-0899",
        "code": "14.0899",
        "title": "Civil Engineering, Other"
      }
    ]
  },
  {
    "code": "14.09",
    "title": "Computer Engineering, General",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-0901",
        "code": "14.0901",
        "title": "Computer Engineering, General"
      },
      {
        "id": "cip-14-0902",
        "code": "14.0902",
        "title": "Computer Hardware Engineering"
      },
      {
        "id": "cip-14-0903",
        "code": "14.0903",
        "title": "Computer Software Engineering"
      },
      {
        "id": "cip-14-0999",
        "code": "14.0999",
        "title": "Computer Engineering, Other"
      }
    ]
  },
  {
    "code": "14.10",
    "title": "Electrical, Electronics and Communications Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1001",
        "code": "14.1001",
        "title": "Electrical, Electronics and Communications Engineering"
      },
      {
        "id": "cip-14-1003",
        "code": "14.1003",
        "title": "Laser and Optical Engineering"
      },
      {
        "id": "cip-14-1004",
        "code": "14.1004",
        "title": "Telecommunications Engineering"
      },
      {
        "id": "cip-14-1099",
        "code": "14.1099",
        "title": "Electrical, Electronics and Communications Engineering, Other"
      }
    ]
  },
  {
    "code": "14.11",
    "title": "Engineering Mechanics",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1101",
        "code": "14.1101",
        "title": "Engineering Mechanics"
      }
    ]
  },
  {
    "code": "14.12",
    "title": "Engineering Physics",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1201",
        "code": "14.1201",
        "title": "Engineering Physics"
      }
    ]
  },
  {
    "code": "14.13",
    "title": "Engineering Science",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1301",
        "code": "14.1301",
        "title": "Engineering Science"
      }
    ]
  },
  {
    "code": "14.14",
    "title": "Environmental/Environmental Health Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1401",
        "code": "14.1401",
        "title": "Environmental/Environmental Health Engineering"
      }
    ]
  },
  {
    "code": "14.18",
    "title": "Materials Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1801",
        "code": "14.1801",
        "title": "Materials Engineering"
      }
    ]
  },
  {
    "code": "14.19",
    "title": "Mechanical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-1901",
        "code": "14.1901",
        "title": "Mechanical Engineering"
      }
    ]
  },
  {
    "code": "14.20",
    "title": "Metallurgical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2001",
        "code": "14.2001",
        "title": "Metallurgical Engineering"
      }
    ]
  },
  {
    "code": "14.21",
    "title": "Mining and Mineral Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2101",
        "code": "14.2101",
        "title": "Mining and Mineral Engineering"
      }
    ]
  },
  {
    "code": "14.22",
    "title": "Naval Architecture and Marine Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2201",
        "code": "14.2201",
        "title": "Naval Architecture and Marine Engineering"
      }
    ]
  },
  {
    "code": "14.23",
    "title": "Nuclear Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2301",
        "code": "14.2301",
        "title": "Nuclear Engineering"
      }
    ]
  },
  {
    "code": "14.24",
    "title": "Ocean Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2401",
        "code": "14.2401",
        "title": "Ocean Engineering"
      }
    ]
  },
  {
    "code": "14.25",
    "title": "Petroleum Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2501",
        "code": "14.2501",
        "title": "Petroleum Engineering"
      }
    ]
  },
  {
    "code": "14.27",
    "title": "Systems Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2701",
        "code": "14.2701",
        "title": "Systems Engineering"
      }
    ]
  },
  {
    "code": "14.28",
    "title": "Textile Sciences and Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-2801",
        "code": "14.2801",
        "title": "Textile Sciences and Engineering"
      }
    ]
  },
  {
    "code": "14.32",
    "title": "Polymer/Plastics Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3201",
        "code": "14.3201",
        "title": "Polymer/Plastics Engineering"
      }
    ]
  },
  {
    "code": "14.33",
    "title": "Construction Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3301",
        "code": "14.3301",
        "title": "Construction Engineering"
      }
    ]
  },
  {
    "code": "14.34",
    "title": "Forest Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3401",
        "code": "14.3401",
        "title": "Forest Engineering"
      }
    ]
  },
  {
    "code": "14.35",
    "title": "Industrial Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3501",
        "code": "14.3501",
        "title": "Industrial Engineering"
      }
    ]
  },
  {
    "code": "14.36",
    "title": "Manufacturing Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3601",
        "code": "14.3601",
        "title": "Manufacturing Engineering"
      }
    ]
  },
  {
    "code": "14.37",
    "title": "Operations Research",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3701",
        "code": "14.3701",
        "title": "Operations Research"
      }
    ]
  },
  {
    "code": "14.38",
    "title": "Surveying Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3801",
        "code": "14.3801",
        "title": "Surveying Engineering"
      }
    ]
  },
  {
    "code": "14.39",
    "title": "Geological/Geophysical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-3901",
        "code": "14.3901",
        "title": "Geological/Geophysical Engineering"
      }
    ]
  },
  {
    "code": "14.40",
    "title": "Paper Science and Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4001",
        "code": "14.4001",
        "title": "Paper Science and Engineering"
      }
    ]
  },
  {
    "code": "14.41",
    "title": "Electromechanical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4101",
        "code": "14.4101",
        "title": "Electromechanical Engineering"
      }
    ]
  },
  {
    "code": "14.42",
    "title": "Mechatronics, Robotics, and Automation Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4201",
        "code": "14.4201",
        "title": "Mechatronics, Robotics, and Automation Engineering"
      }
    ]
  },
  {
    "code": "14.43",
    "title": "Biochemical Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4301",
        "code": "14.4301",
        "title": "Biochemical Engineering"
      }
    ]
  },
  {
    "code": "14.44",
    "title": "Engineering Chemistry",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4401",
        "code": "14.4401",
        "title": "Engineering Chemistry"
      }
    ]
  },
  {
    "code": "14.45",
    "title": "Biological/Biosystems Engineering",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-4501",
        "code": "14.4501",
        "title": "Biological/Biosystems Engineering"
      }
    ]
  },
  {
    "code": "14.99",
    "title": "Engineering, Other",
    "parentCode": "14",
    "parentTitle": "ENGINEERING",
    "majors": [
      {
        "id": "cip-14-9999",
        "code": "14.9999",
        "title": "Engineering, Other"
      }
    ]
  },
  {
    "code": "15.00",
    "title": "Engineering Technology, General",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0000",
        "code": "15.0000",
        "title": "Engineering Technology, General"
      }
    ]
  },
  {
    "code": "15.01",
    "title": "Architectural Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0101",
        "code": "15.0101",
        "title": "Architectural Engineering Technology/Technician"
      }
    ]
  },
  {
    "code": "15.02",
    "title": "Civil Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0201",
        "code": "15.0201",
        "title": "Civil Engineering Technology/Technician"
      }
    ]
  },
  {
    "code": "15.03",
    "title": "Electrical Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0303",
        "code": "15.0303",
        "title": "Electrical, Electronic and Communications Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0304",
        "code": "15.0304",
        "title": "Laser and Optical Technology/Technician"
      },
      {
        "id": "cip-15-0305",
        "code": "15.0305",
        "title": "Telecommunications Technology/Technician"
      },
      {
        "id": "cip-15-0306",
        "code": "15.0306",
        "title": "Integrated Circuit Design"
      },
      {
        "id": "cip-15-0399",
        "code": "15.0399",
        "title": "Electrical and Electronic Engineering Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.04",
    "title": "Electromechanical Instrumentation and Maintenance Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0401",
        "code": "15.0401",
        "title": "Biomedical Technology/Technician"
      },
      {
        "id": "cip-15-0403",
        "code": "15.0403",
        "title": "Electromechanical Technology/Electromechanical Engineering Technology"
      },
      {
        "id": "cip-15-0404",
        "code": "15.0404",
        "title": "Instrumentation Technology/Technician"
      },
      {
        "id": "cip-15-0405",
        "code": "15.0405",
        "title": "Robotics Technology/Technician"
      },
      {
        "id": "cip-15-0406",
        "code": "15.0406",
        "title": "Automation Engineer Technology/Technician"
      },
      {
        "id": "cip-15-0499",
        "code": "15.0499",
        "title": "Electromechanical and Instrumentation and Maintenance Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.05",
    "title": "Environmental Control Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0501",
        "code": "15.0501",
        "title": "Heating, Air Conditioning and Refrigeration Technology/Technician (ACH/ACR/ACHR/HRAC/HVAC/AC Technology)"
      },
      {
        "id": "cip-15-0503",
        "code": "15.0503",
        "title": "Energy Management and Systems Technology/Technician"
      },
      {
        "id": "cip-15-0505",
        "code": "15.0505",
        "title": "Solar Energy Technology/Technician"
      },
      {
        "id": "cip-15-0506",
        "code": "15.0506",
        "title": "Water Quality and Wastewater Treatment Management and Recycling Technology/Technician"
      },
      {
        "id": "cip-15-0507",
        "code": "15.0507",
        "title": "Environmental Engineering Technology/Environmental Technology"
      },
      {
        "id": "cip-15-0508",
        "code": "15.0508",
        "title": "Hazardous Materials Management and Waste Technology/Technician"
      },
      {
        "id": "cip-15-0599",
        "code": "15.0599",
        "title": "Environmental Control Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.06",
    "title": "Industrial Production Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0607",
        "code": "15.0607",
        "title": "Plastics Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0611",
        "code": "15.0611",
        "title": "Metallurgical Technology/Technician"
      },
      {
        "id": "cip-15-0612",
        "code": "15.0612",
        "title": "Industrial Technology/Technician"
      },
      {
        "id": "cip-15-0613",
        "code": "15.0613",
        "title": "Manufacturing Technology/Technician"
      },
      {
        "id": "cip-15-0614",
        "code": "15.0614",
        "title": "Welding Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0615",
        "code": "15.0615",
        "title": "Chemical Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0616",
        "code": "15.0616",
        "title": "Semiconductor Manufacturing Technology"
      },
      {
        "id": "cip-15-0699",
        "code": "15.0699",
        "title": "Industrial Production Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.07",
    "title": "Quality Control and Safety Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0701",
        "code": "15.0701",
        "title": "Occupational Safety and Health Technology/Technician"
      },
      {
        "id": "cip-15-0702",
        "code": "15.0702",
        "title": "Quality Control Technology/Technician"
      },
      {
        "id": "cip-15-0703",
        "code": "15.0703",
        "title": "Industrial Safety Technology/Technician"
      },
      {
        "id": "cip-15-0704",
        "code": "15.0704",
        "title": "Hazardous Materials Information Systems Technology/Technician"
      },
      {
        "id": "cip-15-0799",
        "code": "15.0799",
        "title": "Quality Control and Safety Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.08",
    "title": "Mechanical Engineering Related Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0801",
        "code": "15.0801",
        "title": "Aeronautical/Aerospace Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0803",
        "code": "15.0803",
        "title": "Automotive Engineering Technology/Technician"
      },
      {
        "id": "cip-15-0805",
        "code": "15.0805",
        "title": "Mechanical Engineering/Mechanical Technology/Technician"
      },
      {
        "id": "cip-15-0899",
        "code": "15.0899",
        "title": "Mechanical Engineering Related Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.09",
    "title": "Mining and Petroleum Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-0901",
        "code": "15.0901",
        "title": "Mining Technology/Technician"
      },
      {
        "id": "cip-15-0903",
        "code": "15.0903",
        "title": "Petroleum Technology/Technician"
      },
      {
        "id": "cip-15-0999",
        "code": "15.0999",
        "title": "Mining and Petroleum Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.10",
    "title": "Construction Engineering Technologies",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1001",
        "code": "15.1001",
        "title": "Construction Engineering Technology/Technician"
      }
    ]
  },
  {
    "code": "15.11",
    "title": "Engineering-Related Technologies",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1102",
        "code": "15.1102",
        "title": "Surveying Technology/Surveying"
      },
      {
        "id": "cip-15-1103",
        "code": "15.1103",
        "title": "Hydraulics and Fluid Power Technology/Technician"
      },
      {
        "id": "cip-15-1199",
        "code": "15.1199",
        "title": "Engineering-Related Technologies, Other"
      }
    ]
  },
  {
    "code": "15.12",
    "title": "Computer Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1201",
        "code": "15.1201",
        "title": "Computer Engineering Technology/Technician"
      },
      {
        "id": "cip-15-1202",
        "code": "15.1202",
        "title": "Computer Technology/Computer Systems Technology"
      },
      {
        "id": "cip-15-1203",
        "code": "15.1203",
        "title": "Computer Hardware Technology/Technician"
      },
      {
        "id": "cip-15-1204",
        "code": "15.1204",
        "title": "Computer Software Technology/Technician"
      },
      {
        "id": "cip-15-1299",
        "code": "15.1299",
        "title": "Computer Engineering Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.13",
    "title": "Drafting/Design Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1301",
        "code": "15.1301",
        "title": "Drafting and Design Technology/Technician, General"
      },
      {
        "id": "cip-15-1302",
        "code": "15.1302",
        "title": "CAD/CADD Drafting and/or Design Technology/Technician"
      },
      {
        "id": "cip-15-1303",
        "code": "15.1303",
        "title": "Architectural Drafting and Architectural CAD/CADD"
      },
      {
        "id": "cip-15-1304",
        "code": "15.1304",
        "title": "Civil Drafting and Civil Engineering CAD/CADD"
      },
      {
        "id": "cip-15-1305",
        "code": "15.1305",
        "title": "Electrical/Electronics Drafting and Electrical/Electronics CAD/CADD"
      },
      {
        "id": "cip-15-1306",
        "code": "15.1306",
        "title": "Mechanical Drafting and Mechanical Drafting CAD/CADD"
      },
      {
        "id": "cip-15-1399",
        "code": "15.1399",
        "title": "Drafting/Design Engineering Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "15.14",
    "title": "Nuclear Engineering Technologies/Technicians",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1401",
        "code": "15.1401",
        "title": "Nuclear Engineering Technology/Technician"
      }
    ]
  },
  {
    "code": "15.15",
    "title": "Engineering-Related Fields",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1501",
        "code": "15.1501",
        "title": "Engineering/Industrial Management"
      },
      {
        "id": "cip-15-1502",
        "code": "15.1502",
        "title": "Engineering Design"
      },
      {
        "id": "cip-15-1503",
        "code": "15.1503",
        "title": "Packaging Science"
      },
      {
        "id": "cip-15-1599",
        "code": "15.1599",
        "title": "Engineering-Related Fields, Other"
      }
    ]
  },
  {
    "code": "15.16",
    "title": "Nanotechnology",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-1601",
        "code": "15.1601",
        "title": "Nanotechnology"
      }
    ]
  },
  {
    "code": "15.99",
    "title": "Engineering Technologies/Technicians, Other",
    "parentCode": "15",
    "parentTitle": "ENGINEERING TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-15-9999",
        "code": "15.9999",
        "title": "Engineering Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "16.01",
    "title": "Linguistic, Comparative, and Related Language Studies and Services",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0101",
        "code": "16.0101",
        "title": "Foreign Languages and Literatures, General"
      },
      {
        "id": "cip-16-0102",
        "code": "16.0102",
        "title": "Linguistics"
      },
      {
        "id": "cip-16-0103",
        "code": "16.0103",
        "title": "Language Interpretation and Translation"
      },
      {
        "id": "cip-16-0104",
        "code": "16.0104",
        "title": "Comparative Literature"
      },
      {
        "id": "cip-16-0105",
        "code": "16.0105",
        "title": "Applied Linguistics"
      },
      {
        "id": "cip-16-0199",
        "code": "16.0199",
        "title": "Linguistic, Comparative, and Related Language Studies and Services, Other"
      }
    ]
  },
  {
    "code": "16.02",
    "title": "African Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0201",
        "code": "16.0201",
        "title": "African Languages, Literatures, and Linguistics"
      }
    ]
  },
  {
    "code": "16.03",
    "title": "East Asian Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0300",
        "code": "16.0300",
        "title": "East Asian Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0301",
        "code": "16.0301",
        "title": "Chinese Language and Literature"
      },
      {
        "id": "cip-16-0302",
        "code": "16.0302",
        "title": "Japanese Language and Literature"
      },
      {
        "id": "cip-16-0303",
        "code": "16.0303",
        "title": "Korean Language and Literature"
      },
      {
        "id": "cip-16-0304",
        "code": "16.0304",
        "title": "Tibetan Language and Literature"
      },
      {
        "id": "cip-16-0399",
        "code": "16.0399",
        "title": "East Asian Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.04",
    "title": "Slavic, Baltic and Albanian Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0400",
        "code": "16.0400",
        "title": "Slavic Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0401",
        "code": "16.0401",
        "title": "Baltic Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-0402",
        "code": "16.0402",
        "title": "Russian Language and Literature"
      },
      {
        "id": "cip-16-0404",
        "code": "16.0404",
        "title": "Albanian Language and Literature"
      },
      {
        "id": "cip-16-0405",
        "code": "16.0405",
        "title": "Bulgarian Language and Literature"
      },
      {
        "id": "cip-16-0406",
        "code": "16.0406",
        "title": "Czech Language and Literature"
      },
      {
        "id": "cip-16-0407",
        "code": "16.0407",
        "title": "Polish Language and Literature"
      },
      {
        "id": "cip-16-0408",
        "code": "16.0408",
        "title": "Serbian, Croatian, and Serbo-Croatian Languages and Literatures"
      },
      {
        "id": "cip-16-0409",
        "code": "16.0409",
        "title": "Slovak Language and Literature"
      },
      {
        "id": "cip-16-0410",
        "code": "16.0410",
        "title": "Ukrainian Language and Literature"
      },
      {
        "id": "cip-16-0499",
        "code": "16.0499",
        "title": "Slavic, Baltic, and Albanian Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.05",
    "title": "Germanic Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0500",
        "code": "16.0500",
        "title": "Germanic Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0501",
        "code": "16.0501",
        "title": "German Language and Literature"
      },
      {
        "id": "cip-16-0502",
        "code": "16.0502",
        "title": "Scandinavian Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-0503",
        "code": "16.0503",
        "title": "Danish Language and Literature"
      },
      {
        "id": "cip-16-0504",
        "code": "16.0504",
        "title": "Dutch/Flemish Language and Literature"
      },
      {
        "id": "cip-16-0505",
        "code": "16.0505",
        "title": "Norwegian Language and Literature"
      },
      {
        "id": "cip-16-0506",
        "code": "16.0506",
        "title": "Swedish Language and Literature"
      },
      {
        "id": "cip-16-0599",
        "code": "16.0599",
        "title": "Germanic Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.06",
    "title": "Modern Greek Language and Literature",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0601",
        "code": "16.0601",
        "title": "Modern Greek Language and Literature"
      }
    ]
  },
  {
    "code": "16.07",
    "title": "South Asian Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0700",
        "code": "16.0700",
        "title": "South Asian Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0701",
        "code": "16.0701",
        "title": "Hindi Language and Literature"
      },
      {
        "id": "cip-16-0702",
        "code": "16.0702",
        "title": "Sanskrit and Classical Indian Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-0704",
        "code": "16.0704",
        "title": "Bengali Language and Literature"
      },
      {
        "id": "cip-16-0705",
        "code": "16.0705",
        "title": "Punjabi Language and Literature"
      },
      {
        "id": "cip-16-0706",
        "code": "16.0706",
        "title": "Tamil Language and Literature"
      },
      {
        "id": "cip-16-0707",
        "code": "16.0707",
        "title": "Urdu Language and Literature"
      },
      {
        "id": "cip-16-0799",
        "code": "16.0799",
        "title": "South Asian Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.08",
    "title": "Iranian/Persian Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0801",
        "code": "16.0801",
        "title": "Iranian/Persian Languages, Literatures, and Linguistics"
      }
    ]
  },
  {
    "code": "16.09",
    "title": "Romance Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-0900",
        "code": "16.0900",
        "title": "Romance Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0901",
        "code": "16.0901",
        "title": "French Language and Literature"
      },
      {
        "id": "cip-16-0902",
        "code": "16.0902",
        "title": "Italian Language and Literature"
      },
      {
        "id": "cip-16-0904",
        "code": "16.0904",
        "title": "Portuguese Language and Literature"
      },
      {
        "id": "cip-16-0905",
        "code": "16.0905",
        "title": "Spanish Language and Literature"
      },
      {
        "id": "cip-16-0906",
        "code": "16.0906",
        "title": "Romanian Language and Literature"
      },
      {
        "id": "cip-16-0907",
        "code": "16.0907",
        "title": "Catalan Language and Literature"
      },
      {
        "id": "cip-16-0908",
        "code": "16.0908",
        "title": "Hispanic and Latin American Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-0999",
        "code": "16.0999",
        "title": "Romance Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.10",
    "title": "American Indian/Native American Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1001",
        "code": "16.1001",
        "title": "American Indian/Native American Languages, Literatures, and Linguistics"
      }
    ]
  },
  {
    "code": "16.11",
    "title": "Middle/Near Eastern and Semitic Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1100",
        "code": "16.1100",
        "title": "Semitic Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-1101",
        "code": "16.1101",
        "title": "Arabic Language and Literature"
      },
      {
        "id": "cip-16-1102",
        "code": "16.1102",
        "title": "Hebrew Language and Literature"
      },
      {
        "id": "cip-16-1103",
        "code": "16.1103",
        "title": "Ancient Near Eastern and Biblical Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-1199",
        "code": "16.1199",
        "title": "Middle/Near Eastern and Semitic Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.12",
    "title": "Classics and Classical Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1200",
        "code": "16.1200",
        "title": "Classics and Classical Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-1202",
        "code": "16.1202",
        "title": "Ancient/Classical Greek Language and Literature"
      },
      {
        "id": "cip-16-1203",
        "code": "16.1203",
        "title": "Latin Language and Literature"
      },
      {
        "id": "cip-16-1299",
        "code": "16.1299",
        "title": "Classics and Classical Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.13",
    "title": "Celtic Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1301",
        "code": "16.1301",
        "title": "Celtic Languages, Literatures, and Linguistics"
      }
    ]
  },
  {
    "code": "16.14",
    "title": "Southeast Asian and Australasian/Pacific Languages, Literatures, and Linguistics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1400",
        "code": "16.1400",
        "title": "Southeast Asian Languages, Literatures, and Linguistics, General"
      },
      {
        "id": "cip-16-1401",
        "code": "16.1401",
        "title": "Australian/Oceanic/Pacific Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-1402",
        "code": "16.1402",
        "title": "Bahasa Indonesian/Bahasa Malay Languages and Literatures"
      },
      {
        "id": "cip-16-1403",
        "code": "16.1403",
        "title": "Burmese Language and Literature"
      },
      {
        "id": "cip-16-1404",
        "code": "16.1404",
        "title": "Filipino/Tagalog Language and Literature"
      },
      {
        "id": "cip-16-1405",
        "code": "16.1405",
        "title": "Khmer/Cambodian Language and Literature"
      },
      {
        "id": "cip-16-1406",
        "code": "16.1406",
        "title": "Lao/Laotian Language and Literature"
      },
      {
        "id": "cip-16-1407",
        "code": "16.1407",
        "title": "Thai Language and Literature"
      },
      {
        "id": "cip-16-1408",
        "code": "16.1408",
        "title": "Vietnamese Language and Literature"
      },
      {
        "id": "cip-16-1499",
        "code": "16.1499",
        "title": "Southeast Asian and Australasian/Pacific Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.15",
    "title": "Turkic, Ural-Altaic, Caucasian, and Central Asian Languages, Literatures, and Lingustics",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1501",
        "code": "16.1501",
        "title": "Turkish Language and Literature"
      },
      {
        "id": "cip-16-1502",
        "code": "16.1502",
        "title": "Finnish and Related Languages, Literatures, and Linguistics"
      },
      {
        "id": "cip-16-1503",
        "code": "16.1503",
        "title": "Hungarian/Magyar Language and Literature"
      },
      {
        "id": "cip-16-1504",
        "code": "16.1504",
        "title": "Mongolian Language and Literature"
      },
      {
        "id": "cip-16-1599",
        "code": "16.1599",
        "title": "Turkic, Ural-Altaic, Caucasian, and Central Asian Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "16.16",
    "title": "American Sign Language",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-1601",
        "code": "16.1601",
        "title": "American Sign Language (ASL)"
      },
      {
        "id": "cip-16-1602",
        "code": "16.1602",
        "title": "Linguistics of ASL and Other Sign Languages"
      },
      {
        "id": "cip-16-1603",
        "code": "16.1603",
        "title": "Sign Language Interpretation and Translation"
      },
      {
        "id": "cip-16-1699",
        "code": "16.1699",
        "title": "American Sign Language, Other"
      }
    ]
  },
  {
    "code": "16.99",
    "title": "Foreign Languages, Literatures, and Linguistics, Other",
    "parentCode": "16",
    "parentTitle": "FOREIGN LANGUAGES, LITERATURES, AND LINGUISTICS",
    "majors": [
      {
        "id": "cip-16-9999",
        "code": "16.9999",
        "title": "Foreign Languages, Literatures, and Linguistics, Other"
      }
    ]
  },
  {
    "code": "19.00",
    "title": "Work and Family Studies",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0000",
        "code": "19.0000",
        "title": "Work and Family Studies"
      }
    ]
  },
  {
    "code": "19.01",
    "title": "Family and Consumer Sciences/Human Sciences, General",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0101",
        "code": "19.0101",
        "title": "Family and Consumer Sciences/Human Sciences, General"
      }
    ]
  },
  {
    "code": "19.02",
    "title": "Family and Consumer Sciences/Human Sciences Business Services",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0201",
        "code": "19.0201",
        "title": "Business Family and Consumer Sciences/Human Sciences"
      },
      {
        "id": "cip-19-0202",
        "code": "19.0202",
        "title": "Family and Consumer Sciences/Human Sciences Communication"
      },
      {
        "id": "cip-19-0203",
        "code": "19.0203",
        "title": "Consumer Merchandising/Retailing Management"
      },
      {
        "id": "cip-19-0299",
        "code": "19.0299",
        "title": "Family and Consumer Sciences/Human Sciences Business Services, Other"
      }
    ]
  },
  {
    "code": "19.04",
    "title": "Family and Consumer Economics and Related Studies",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0401",
        "code": "19.0401",
        "title": "Family Resource Management Studies, General"
      },
      {
        "id": "cip-19-0402",
        "code": "19.0402",
        "title": "Consumer Economics"
      },
      {
        "id": "cip-19-0403",
        "code": "19.0403",
        "title": "Consumer Services and Advocacy"
      },
      {
        "id": "cip-19-0499",
        "code": "19.0499",
        "title": "Family and Consumer Economics and Related Services, Other"
      }
    ]
  },
  {
    "code": "19.05",
    "title": "Foods, Nutrition, and Related Services",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0501",
        "code": "19.0501",
        "title": "Foods, Nutrition, and Wellness Studies, General"
      },
      {
        "id": "cip-19-0504",
        "code": "19.0504",
        "title": "Human Nutrition"
      },
      {
        "id": "cip-19-0505",
        "code": "19.0505",
        "title": "Foodservice Systems Administration/Management"
      },
      {
        "id": "cip-19-0599",
        "code": "19.0599",
        "title": "Foods, Nutrition, and Related Services, Other"
      }
    ]
  },
  {
    "code": "19.06",
    "title": "Housing and Human Environments",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0601",
        "code": "19.0601",
        "title": "Housing and Human Environments, General"
      },
      {
        "id": "cip-19-0604",
        "code": "19.0604",
        "title": "Facilities Planning and Management"
      },
      {
        "id": "cip-19-0605",
        "code": "19.0605",
        "title": "Home Furnishings and Equipment Installers"
      },
      {
        "id": "cip-19-0699",
        "code": "19.0699",
        "title": "Housing and Human Environments, Other"
      }
    ]
  },
  {
    "code": "19.07",
    "title": "Human Development, Family Studies, and Related Services",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0701",
        "code": "19.0701",
        "title": "Human Development and Family Studies, General"
      },
      {
        "id": "cip-19-0702",
        "code": "19.0702",
        "title": "Adult Development and Aging"
      },
      {
        "id": "cip-19-0704",
        "code": "19.0704",
        "title": "Family Systems"
      },
      {
        "id": "cip-19-0706",
        "code": "19.0706",
        "title": "Child Development"
      },
      {
        "id": "cip-19-0707",
        "code": "19.0707",
        "title": "Family and Community Services"
      },
      {
        "id": "cip-19-0708",
        "code": "19.0708",
        "title": "Child Care and Support Services Management"
      },
      {
        "id": "cip-19-0709",
        "code": "19.0709",
        "title": "Child Care Provider/Assistant"
      },
      {
        "id": "cip-19-0710",
        "code": "19.0710",
        "title": "Developmental Services Worker"
      },
      {
        "id": "cip-19-0799",
        "code": "19.0799",
        "title": "Human Development, Family Studies, and Related Services, Other"
      }
    ]
  },
  {
    "code": "19.09",
    "title": "Apparel and Textiles",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-0901",
        "code": "19.0901",
        "title": "Apparel and Textiles, General"
      },
      {
        "id": "cip-19-0902",
        "code": "19.0902",
        "title": "Apparel and Textile Manufacture"
      },
      {
        "id": "cip-19-0904",
        "code": "19.0904",
        "title": "Textile Science"
      },
      {
        "id": "cip-19-0905",
        "code": "19.0905",
        "title": "Apparel and Textile Marketing Management"
      },
      {
        "id": "cip-19-0906",
        "code": "19.0906",
        "title": "Fashion and Fabric Consultant"
      },
      {
        "id": "cip-19-0999",
        "code": "19.0999",
        "title": "Apparel and Textiles, Other"
      }
    ]
  },
  {
    "code": "19.99",
    "title": "Family and Consumer Sciences/Human Sciences, Other",
    "parentCode": "19",
    "parentTitle": "FAMILY AND CONSUMER SCIENCES/HUMAN SCIENCES",
    "majors": [
      {
        "id": "cip-19-9999",
        "code": "19.9999",
        "title": "Family and Consumer Sciences/Human Sciences, Other"
      }
    ]
  },
  {
    "code": "22.00",
    "title": "Non-Professional General Legal Studies (Undergraduate)",
    "parentCode": "22",
    "parentTitle": "LEGAL PROFESSIONS AND STUDIES",
    "majors": [
      {
        "id": "cip-22-0000",
        "code": "22.0000",
        "title": "Legal Studies, General"
      },
      {
        "id": "cip-22-0001",
        "code": "22.0001",
        "title": "Pre-Law Studies"
      }
    ]
  },
  {
    "code": "22.01",
    "title": "Law (LL.B, J.D.)",
    "parentCode": "22",
    "parentTitle": "LEGAL PROFESSIONS AND STUDIES",
    "majors": [
      {
        "id": "cip-22-0101",
        "code": "22.0101",
        "title": "Law (LL.B., J.D.)"
      }
    ]
  },
  {
    "code": "22.02",
    "title": "Legal Research and Advanced Professional Studies (Post-LL.B./J.D.)",
    "parentCode": "22",
    "parentTitle": "LEGAL PROFESSIONS AND STUDIES",
    "majors": [
      {
        "id": "cip-22-0201",
        "code": "22.0201",
        "title": "Advanced Legal Research/Studies, General (LL.M., M.C.L., M.L.I., M.S.L., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0202",
        "code": "22.0202",
        "title": "Programs for Foreign Lawyers (LL.M., M.C.L.)"
      },
      {
        "id": "cip-22-0203",
        "code": "22.0203",
        "title": "American/U.S. Law/Legal Studies/Jurisprudence (LL.M., M.C.J., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0204",
        "code": "22.0204",
        "title": "Canadian Law/Legal Studies/Jurisprudence (LL.M., M.C.J., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0205",
        "code": "22.0205",
        "title": "Banking, Corporate, Finance, and Securities Law (LL.M., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0206",
        "code": "22.0206",
        "title": "Comparative Law (LL.M., M.C.L., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0207",
        "code": "22.0207",
        "title": "Energy, Environment, and Natural Resources Law (LL.M., M.S., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0208",
        "code": "22.0208",
        "title": "Health Law (LL.M., M.J., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0209",
        "code": "22.0209",
        "title": "International Law and Legal Studies (LL.M., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0210",
        "code": "22.0210",
        "title": "International Business, Trade, and Tax Law (LL.M., J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0211",
        "code": "22.0211",
        "title": "Tax Law/Taxation (LL.M, J.S.D./S.J.D.)"
      },
      {
        "id": "cip-22-0212",
        "code": "22.0212",
        "title": "Intellectual Property Law"
      },
      {
        "id": "cip-22-0299",
        "code": "22.0299",
        "title": "Legal Research and Advanced Professional Studies, Other"
      }
    ]
  },
  {
    "code": "22.03",
    "title": "Legal Support Services",
    "parentCode": "22",
    "parentTitle": "LEGAL PROFESSIONS AND STUDIES",
    "majors": [
      {
        "id": "cip-22-0301",
        "code": "22.0301",
        "title": "Legal Administrative Assistant/Secretary"
      },
      {
        "id": "cip-22-0302",
        "code": "22.0302",
        "title": "Legal Assistant/Paralegal"
      },
      {
        "id": "cip-22-0303",
        "code": "22.0303",
        "title": "Court Reporting/Court Reporter"
      },
      {
        "id": "cip-22-0399",
        "code": "22.0399",
        "title": "Legal Support Services, Other"
      }
    ]
  },
  {
    "code": "22.99",
    "title": "Legal Professions and Studies, Other",
    "parentCode": "22",
    "parentTitle": "LEGAL PROFESSIONS AND STUDIES",
    "majors": [
      {
        "id": "cip-22-9999",
        "code": "22.9999",
        "title": "Legal Professions and Studies, Other"
      }
    ]
  },
  {
    "code": "23.01",
    "title": "English Language and Literature, General",
    "parentCode": "23",
    "parentTitle": "ENGLISH LANGUAGE AND LITERATURE/LETTERS",
    "majors": [
      {
        "id": "cip-23-0101",
        "code": "23.0101",
        "title": "English Language and Literature, General"
      }
    ]
  },
  {
    "code": "23.13",
    "title": "Rhetoric and Composition/Writing Studies",
    "parentCode": "23",
    "parentTitle": "ENGLISH LANGUAGE AND LITERATURE/LETTERS",
    "majors": [
      {
        "id": "cip-23-1301",
        "code": "23.1301",
        "title": "Writing, General"
      },
      {
        "id": "cip-23-1302",
        "code": "23.1302",
        "title": "Creative Writing"
      },
      {
        "id": "cip-23-1303",
        "code": "23.1303",
        "title": "Technical and Business Writing"
      },
      {
        "id": "cip-23-1304",
        "code": "23.1304",
        "title": "Rhetoric and Composition"
      },
      {
        "id": "cip-23-1399",
        "code": "23.1399",
        "title": "Rhetoric and Composition/Writing Studies, Other"
      }
    ]
  },
  {
    "code": "23.14",
    "title": "Literature",
    "parentCode": "23",
    "parentTitle": "ENGLISH LANGUAGE AND LITERATURE/LETTERS",
    "majors": [
      {
        "id": "cip-23-1401",
        "code": "23.1401",
        "title": "General Literature"
      },
      {
        "id": "cip-23-1402",
        "code": "23.1402",
        "title": "American Literature (United States)"
      },
      {
        "id": "cip-23-1403",
        "code": "23.1403",
        "title": "American Literature (Canadian)"
      },
      {
        "id": "cip-23-1404",
        "code": "23.1404",
        "title": "English Literature (British and Commonwealth)"
      },
      {
        "id": "cip-23-1405",
        "code": "23.1405",
        "title": "Children's and Adolescent Literature"
      },
      {
        "id": "cip-23-1499",
        "code": "23.1499",
        "title": "Literature, Other"
      }
    ]
  },
  {
    "code": "23.99",
    "title": "English Language and Literature/Letters, Other",
    "parentCode": "23",
    "parentTitle": "ENGLISH LANGUAGE AND LITERATURE/LETTERS",
    "majors": [
      {
        "id": "cip-23-9999",
        "code": "23.9999",
        "title": "English Language and Literature/Letters, Other"
      }
    ]
  },
  {
    "code": "24.01",
    "title": "Liberal Arts and Sciences, General Studies and Humanities",
    "parentCode": "24",
    "parentTitle": "LIBERAL ARTS AND SCIENCES, GENERAL STUDIES AND HUMANITIES",
    "majors": [
      {
        "id": "cip-24-0101",
        "code": "24.0101",
        "title": "Liberal Arts and Sciences/Liberal Studies"
      },
      {
        "id": "cip-24-0102",
        "code": "24.0102",
        "title": "General Studies"
      },
      {
        "id": "cip-24-0103",
        "code": "24.0103",
        "title": "Humanities/Humanistic Studies"
      },
      {
        "id": "cip-24-0199",
        "code": "24.0199",
        "title": "Liberal Arts and Sciences, General Studies and Humanities, Other"
      }
    ]
  },
  {
    "code": "25.01",
    "title": "Library Science/Librarianship",
    "parentCode": "25",
    "parentTitle": "LIBRARY SCIENCE",
    "majors": [
      {
        "id": "cip-25-0101",
        "code": "25.0101",
        "title": "Library Science/Librarianship"
      },
      {
        "id": "cip-25-0102",
        "code": "25.0102",
        "title": "Children and Youth Library Services"
      },
      {
        "id": "cip-25-0103",
        "code": "25.0103",
        "title": "Archives/Archival Administration"
      },
      {
        "id": "cip-25-0199",
        "code": "25.0199",
        "title": "Library Science and Administration, Other"
      }
    ]
  },
  {
    "code": "25.03",
    "title": "Library Assistant",
    "parentCode": "25",
    "parentTitle": "LIBRARY SCIENCE",
    "majors": [
      {
        "id": "cip-25-0301",
        "code": "25.0301",
        "title": "Library Assistant/Technician"
      }
    ]
  },
  {
    "code": "25.99",
    "title": "Library Science, Other",
    "parentCode": "25",
    "parentTitle": "LIBRARY SCIENCE",
    "majors": [
      {
        "id": "cip-25-9999",
        "code": "25.9999",
        "title": "Library Science, Other"
      }
    ]
  },
  {
    "code": "26.01",
    "title": "Biology, General",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0101",
        "code": "26.0101",
        "title": "Biology/Biological Sciences, General"
      },
      {
        "id": "cip-26-0102",
        "code": "26.0102",
        "title": "Biomedical Sciences, General"
      }
    ]
  },
  {
    "code": "26.02",
    "title": "Biochemistry, Biophysics and Molecular Biology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0202",
        "code": "26.0202",
        "title": "Biochemistry"
      },
      {
        "id": "cip-26-0203",
        "code": "26.0203",
        "title": "Biophysics"
      },
      {
        "id": "cip-26-0204",
        "code": "26.0204",
        "title": "Molecular Biology"
      },
      {
        "id": "cip-26-0205",
        "code": "26.0205",
        "title": "Molecular Biochemistry"
      },
      {
        "id": "cip-26-0206",
        "code": "26.0206",
        "title": "Molecular Biophysics"
      },
      {
        "id": "cip-26-0207",
        "code": "26.0207",
        "title": "Structural Biology"
      },
      {
        "id": "cip-26-0208",
        "code": "26.0208",
        "title": "Photobiology"
      },
      {
        "id": "cip-26-0209",
        "code": "26.0209",
        "title": "Radiation Biology/Radiobiology"
      },
      {
        "id": "cip-26-0210",
        "code": "26.0210",
        "title": "Biochemistry/Biophysics and Molecular Biology"
      },
      {
        "id": "cip-26-0299",
        "code": "26.0299",
        "title": "Biochemistry, Biophysics and Molecular Biology, Other"
      }
    ]
  },
  {
    "code": "26.03",
    "title": "Botany/Plant Biology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0301",
        "code": "26.0301",
        "title": "Botany/Plant Biology"
      },
      {
        "id": "cip-26-0305",
        "code": "26.0305",
        "title": "Plant Pathology/Phytopathology"
      },
      {
        "id": "cip-26-0307",
        "code": "26.0307",
        "title": "Plant Physiology"
      },
      {
        "id": "cip-26-0308",
        "code": "26.0308",
        "title": "Plant Molecular Biology"
      },
      {
        "id": "cip-26-0399",
        "code": "26.0399",
        "title": "Botany/Plant Biology, Other"
      }
    ]
  },
  {
    "code": "26.04",
    "title": "Cell/Cellular Biology and Anatomical Sciences",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0401",
        "code": "26.0401",
        "title": "Cell/Cellular Biology and Histology"
      },
      {
        "id": "cip-26-0403",
        "code": "26.0403",
        "title": "Anatomy"
      },
      {
        "id": "cip-26-0404",
        "code": "26.0404",
        "title": "Developmental Biology and Embryology"
      },
      {
        "id": "cip-26-0406",
        "code": "26.0406",
        "title": "Cell/Cellular and Molecular Biology"
      },
      {
        "id": "cip-26-0407",
        "code": "26.0407",
        "title": "Cell Biology and Anatomy"
      },
      {
        "id": "cip-26-0499",
        "code": "26.0499",
        "title": "Cell/Cellular Biology and Anatomical Sciences, Other"
      }
    ]
  },
  {
    "code": "26.05",
    "title": "Microbiological Sciences and Immunology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0502",
        "code": "26.0502",
        "title": "Microbiology, General"
      },
      {
        "id": "cip-26-0503",
        "code": "26.0503",
        "title": "Medical Microbiology and Bacteriology"
      },
      {
        "id": "cip-26-0504",
        "code": "26.0504",
        "title": "Virology"
      },
      {
        "id": "cip-26-0505",
        "code": "26.0505",
        "title": "Parasitology"
      },
      {
        "id": "cip-26-0506",
        "code": "26.0506",
        "title": "Mycology"
      },
      {
        "id": "cip-26-0507",
        "code": "26.0507",
        "title": "Immunology"
      },
      {
        "id": "cip-26-0508",
        "code": "26.0508",
        "title": "Microbiology and Immunology"
      },
      {
        "id": "cip-26-0599",
        "code": "26.0599",
        "title": "Microbiological Sciences and Immunology, Other"
      }
    ]
  },
  {
    "code": "26.07",
    "title": "Zoology/Animal Biology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0701",
        "code": "26.0701",
        "title": "Zoology/Animal Biology"
      },
      {
        "id": "cip-26-0702",
        "code": "26.0702",
        "title": "Entomology"
      },
      {
        "id": "cip-26-0707",
        "code": "26.0707",
        "title": "Animal Physiology"
      },
      {
        "id": "cip-26-0708",
        "code": "26.0708",
        "title": "Animal Behavior and Ethology"
      },
      {
        "id": "cip-26-0709",
        "code": "26.0709",
        "title": "Wildlife Biology"
      },
      {
        "id": "cip-26-0799",
        "code": "26.0799",
        "title": "Zoology/Animal Biology, Other"
      }
    ]
  },
  {
    "code": "26.08",
    "title": "Genetics",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0801",
        "code": "26.0801",
        "title": "Genetics, General"
      },
      {
        "id": "cip-26-0802",
        "code": "26.0802",
        "title": "Molecular Genetics"
      },
      {
        "id": "cip-26-0803",
        "code": "26.0803",
        "title": "Microbial and Eukaryotic Genetics"
      },
      {
        "id": "cip-26-0804",
        "code": "26.0804",
        "title": "Animal Genetics"
      },
      {
        "id": "cip-26-0805",
        "code": "26.0805",
        "title": "Plant Genetics"
      },
      {
        "id": "cip-26-0806",
        "code": "26.0806",
        "title": "Human/Medical Genetics"
      },
      {
        "id": "cip-26-0807",
        "code": "26.0807",
        "title": "Genome Sciences/Genomics"
      },
      {
        "id": "cip-26-0899",
        "code": "26.0899",
        "title": "Genetics, Other"
      }
    ]
  },
  {
    "code": "26.09",
    "title": "Physiology, Pathology and Related Sciences",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-0901",
        "code": "26.0901",
        "title": "Physiology, General"
      },
      {
        "id": "cip-26-0902",
        "code": "26.0902",
        "title": "Molecular Physiology"
      },
      {
        "id": "cip-26-0903",
        "code": "26.0903",
        "title": "Cell Physiology"
      },
      {
        "id": "cip-26-0904",
        "code": "26.0904",
        "title": "Endocrinology"
      },
      {
        "id": "cip-26-0905",
        "code": "26.0905",
        "title": "Reproductive Biology"
      },
      {
        "id": "cip-26-0907",
        "code": "26.0907",
        "title": "Cardiovascular Science"
      },
      {
        "id": "cip-26-0908",
        "code": "26.0908",
        "title": "Exercise Physiology"
      },
      {
        "id": "cip-26-0909",
        "code": "26.0909",
        "title": "Vision Science/Physiological Optics"
      },
      {
        "id": "cip-26-0910",
        "code": "26.0910",
        "title": "Pathology/Experimental Pathology"
      },
      {
        "id": "cip-26-0911",
        "code": "26.0911",
        "title": "Oncology and Cancer Biology"
      },
      {
        "id": "cip-26-0912",
        "code": "26.0912",
        "title": "Aerospace Physiology and Medicine"
      },
      {
        "id": "cip-26-0999",
        "code": "26.0999",
        "title": "Physiology, Pathology, and Related Sciences, Other"
      }
    ]
  },
  {
    "code": "26.10",
    "title": "Pharmacology and Toxicology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1001",
        "code": "26.1001",
        "title": "Pharmacology"
      },
      {
        "id": "cip-26-1002",
        "code": "26.1002",
        "title": "Molecular Pharmacology"
      },
      {
        "id": "cip-26-1003",
        "code": "26.1003",
        "title": "Neuropharmacology"
      },
      {
        "id": "cip-26-1004",
        "code": "26.1004",
        "title": "Toxicology"
      },
      {
        "id": "cip-26-1005",
        "code": "26.1005",
        "title": "Molecular Toxicology"
      },
      {
        "id": "cip-26-1006",
        "code": "26.1006",
        "title": "Environmental Toxicology"
      },
      {
        "id": "cip-26-1007",
        "code": "26.1007",
        "title": "Pharmacology and Toxicology"
      },
      {
        "id": "cip-26-1099",
        "code": "26.1099",
        "title": "Pharmacology and Toxicology, Other"
      }
    ]
  },
  {
    "code": "26.11",
    "title": "Biomathematics and Bioinformatics",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1101",
        "code": "26.1101",
        "title": "Biometry/Biometrics"
      },
      {
        "id": "cip-26-1102",
        "code": "26.1102",
        "title": "Biostatistics"
      },
      {
        "id": "cip-26-1103",
        "code": "26.1103",
        "title": "Bioinformatics"
      },
      {
        "id": "cip-26-1104",
        "code": "26.1104",
        "title": "Computational Biology"
      },
      {
        "id": "cip-26-1199",
        "code": "26.1199",
        "title": "Biomathematics and Bioinformatics, Other"
      }
    ]
  },
  {
    "code": "26.12",
    "title": "Biotechnology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1201",
        "code": "26.1201",
        "title": "Biotechnology"
      }
    ]
  },
  {
    "code": "26.13",
    "title": "Ecology, Evolution, Systematics, and Population Biology",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1301",
        "code": "26.1301",
        "title": "Ecology"
      },
      {
        "id": "cip-26-1302",
        "code": "26.1302",
        "title": "Marine Biology and Biological Oceanography"
      },
      {
        "id": "cip-26-1303",
        "code": "26.1303",
        "title": "Evolutionary Biology"
      },
      {
        "id": "cip-26-1304",
        "code": "26.1304",
        "title": "Aquatic Biology/Limnology"
      },
      {
        "id": "cip-26-1305",
        "code": "26.1305",
        "title": "Environmental Biology"
      },
      {
        "id": "cip-26-1306",
        "code": "26.1306",
        "title": "Population Biology"
      },
      {
        "id": "cip-26-1307",
        "code": "26.1307",
        "title": "Conservation Biology"
      },
      {
        "id": "cip-26-1308",
        "code": "26.1308",
        "title": "Systematic Biology/Biological Systematics"
      },
      {
        "id": "cip-26-1309",
        "code": "26.1309",
        "title": "Epidemiology"
      },
      {
        "id": "cip-26-1310",
        "code": "26.1310",
        "title": "Ecology and Evolutionary Biology"
      },
      {
        "id": "cip-26-1399",
        "code": "26.1399",
        "title": "Ecology, Evolution, Systematics and Population Biology, Other"
      }
    ]
  },
  {
    "code": "26.14",
    "title": "Molecular Medicine",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1401",
        "code": "26.1401",
        "title": "Molecular Medicine"
      }
    ]
  },
  {
    "code": "26.15",
    "title": "Neurobiology and Neurosciences",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-1501",
        "code": "26.1501",
        "title": "Neuroscience"
      },
      {
        "id": "cip-26-1502",
        "code": "26.1502",
        "title": "Neuroanatomy"
      },
      {
        "id": "cip-26-1503",
        "code": "26.1503",
        "title": "Neurobiology and Neurophysiology"
      },
      {
        "id": "cip-26-1504",
        "code": "26.1504",
        "title": "Neurobiology and Behavior"
      },
      {
        "id": "cip-26-1599",
        "code": "26.1599",
        "title": "Neurobiology and Neurosciences, Other"
      }
    ]
  },
  {
    "code": "26.99",
    "title": "Biological and Biomedical Sciences, Other",
    "parentCode": "26",
    "parentTitle": "BIOLOGICAL AND BIOMEDICAL SCIENCES",
    "majors": [
      {
        "id": "cip-26-9999",
        "code": "26.9999",
        "title": "Biological and Biomedical Sciences, Other"
      }
    ]
  },
  {
    "code": "27.01",
    "title": "Mathematics",
    "parentCode": "27",
    "parentTitle": "MATHEMATICS AND STATISTICS",
    "majors": [
      {
        "id": "cip-27-0101",
        "code": "27.0101",
        "title": "Mathematics, General"
      },
      {
        "id": "cip-27-0102",
        "code": "27.0102",
        "title": "Algebra and Number Theory"
      },
      {
        "id": "cip-27-0103",
        "code": "27.0103",
        "title": "Analysis and Functional Analysis"
      },
      {
        "id": "cip-27-0104",
        "code": "27.0104",
        "title": "Geometry/Geometric Analysis"
      },
      {
        "id": "cip-27-0105",
        "code": "27.0105",
        "title": "Topology and Foundations"
      },
      {
        "id": "cip-27-0199",
        "code": "27.0199",
        "title": "Mathematics, Other"
      }
    ]
  },
  {
    "code": "27.03",
    "title": "Applied Mathematics",
    "parentCode": "27",
    "parentTitle": "MATHEMATICS AND STATISTICS",
    "majors": [
      {
        "id": "cip-27-0301",
        "code": "27.0301",
        "title": "Applied Mathematics"
      },
      {
        "id": "cip-27-0303",
        "code": "27.0303",
        "title": "Computational Mathematics"
      },
      {
        "id": "cip-27-0304",
        "code": "27.0304",
        "title": "Computational and Applied Mathematics"
      },
      {
        "id": "cip-27-0305",
        "code": "27.0305",
        "title": "Financial Mathematics"
      },
      {
        "id": "cip-27-0306",
        "code": "27.0306",
        "title": "Mathematical Biology"
      },
      {
        "id": "cip-27-0399",
        "code": "27.0399",
        "title": "Applied Mathematics, Other"
      }
    ]
  },
  {
    "code": "27.05",
    "title": "Statistics",
    "parentCode": "27",
    "parentTitle": "MATHEMATICS AND STATISTICS",
    "majors": [
      {
        "id": "cip-27-0501",
        "code": "27.0501",
        "title": "Statistics, General"
      },
      {
        "id": "cip-27-0502",
        "code": "27.0502",
        "title": "Mathematical Statistics and Probability"
      },
      {
        "id": "cip-27-0503",
        "code": "27.0503",
        "title": "Mathematics and Statistics"
      },
      {
        "id": "cip-27-0599",
        "code": "27.0599",
        "title": "Statistics, Other"
      }
    ]
  },
  {
    "code": "27.99",
    "title": "Mathematics and Statistics, Other",
    "parentCode": "27",
    "parentTitle": "MATHEMATICS AND STATISTICS",
    "majors": [
      {
        "id": "cip-27-9999",
        "code": "27.9999",
        "title": "Mathematics and Statistics, Other"
      }
    ]
  },
  {
    "code": "28.01",
    "title": "Air Force JROTC/ROTC",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0101",
        "code": "28.0101",
        "title": "Air Force JROTC/ROTC"
      },
      {
        "id": "cip-28-0199",
        "code": "28.0199",
        "title": "Air Force ROTC, Air Science and Operations, Other"
      }
    ]
  },
  {
    "code": "28.03",
    "title": "Army JROTC/ROTC",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0301",
        "code": "28.0301",
        "title": "Army JROTC/ROTC"
      },
      {
        "id": "cip-28-0399",
        "code": "28.0399",
        "title": "Army ROTC, Military Science and Operations, Other"
      }
    ]
  },
  {
    "code": "28.04",
    "title": "Navy/Marine Corps JROTC/ROTC",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0401",
        "code": "28.0401",
        "title": "Navy/Marine Corps JROTC/ROTC"
      },
      {
        "id": "cip-28-0499",
        "code": "28.0499",
        "title": "Navy/Marine Corps ROTC, Naval Science and Operations, Other"
      }
    ]
  },
  {
    "code": "28.05",
    "title": "Military Science and Operational Studies",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0501",
        "code": "28.0501",
        "title": "Air Science/Airpower Studies"
      },
      {
        "id": "cip-28-0502",
        "code": "28.0502",
        "title": "Air and Space Operational Art and Science"
      },
      {
        "id": "cip-28-0503",
        "code": "28.0503",
        "title": "Military Operational Art and Science/Studies"
      },
      {
        "id": "cip-28-0504",
        "code": "28.0504",
        "title": "Advanced Military and Operational Studies"
      },
      {
        "id": "cip-28-0505",
        "code": "28.0505",
        "title": "Naval Science and Operational Studies"
      },
      {
        "id": "cip-28-0506",
        "code": "28.0506",
        "title": "Special, Irregular and Counterterrorist Operations"
      },
      {
        "id": "cip-28-0599",
        "code": "28.0599",
        "title": "Military Science and Operational Studies, Other"
      }
    ]
  },
  {
    "code": "28.06",
    "title": "Security Policy and Strategy",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0601",
        "code": "28.0601",
        "title": "Strategic Studies, General"
      },
      {
        "id": "cip-28-0602",
        "code": "28.0602",
        "title": "Military and Strategic Leadership"
      },
      {
        "id": "cip-28-0603",
        "code": "28.0603",
        "title": "Military and International Operational Law"
      },
      {
        "id": "cip-28-0604",
        "code": "28.0604",
        "title": "Joint Operations Planning and Strategy"
      },
      {
        "id": "cip-28-0605",
        "code": "28.0605",
        "title": "Weapons of Mass Destruction"
      },
      {
        "id": "cip-28-0699",
        "code": "28.0699",
        "title": "National Security Policy and Strategy, Other"
      }
    ]
  },
  {
    "code": "28.07",
    "title": "Military Economics and Management",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-0701",
        "code": "28.0701",
        "title": "National Resource Strategy and Policy"
      },
      {
        "id": "cip-28-0702",
        "code": "28.0702",
        "title": "Industry Studies"
      },
      {
        "id": "cip-28-0703",
        "code": "28.0703",
        "title": "Military Installation Management"
      },
      {
        "id": "cip-28-0799",
        "code": "28.0799",
        "title": "Military Economics and Management, Other"
      }
    ]
  },
  {
    "code": "28.99",
    "title": "Military Science, Leadership and Operational Art, Other",
    "parentCode": "28",
    "parentTitle": "RESERVE OFFICER TRAINING CORPS (JROTC, ROTC)",
    "majors": [
      {
        "id": "cip-28-9999",
        "code": "28.9999",
        "title": "Military Science, Leadership and Operational Art, Other"
      }
    ]
  },
  {
    "code": "29.02",
    "title": "Intelligence, Command Control and Information Operations",
    "parentCode": "29",
    "parentTitle": "MILITARY TECHNOLOGIES",
    "majors": [
      {
        "id": "cip-29-0201",
        "code": "29.0201",
        "title": "Intelligence, General"
      },
      {
        "id": "cip-29-0202",
        "code": "29.0202",
        "title": "Strategic Intelligence"
      },
      {
        "id": "cip-29-0203",
        "code": "29.0203",
        "title": "Signal/Geospatial Intelligence"
      },
      {
        "id": "cip-29-0204",
        "code": "29.0204",
        "title": "Command & Control (C3, C4I) Systems and Operations"
      },
      {
        "id": "cip-29-0205",
        "code": "29.0205",
        "title": "Information Operations/Joint Information Operations"
      },
      {
        "id": "cip-29-0206",
        "code": "29.0206",
        "title": "Information/Psychological Warfare and Military Media Relations"
      },
      {
        "id": "cip-29-0207",
        "code": "29.0207",
        "title": "Cyber/Electronic Operations and Warfare"
      },
      {
        "id": "cip-29-0299",
        "code": "29.0299",
        "title": "Intelligence, Command Control and Information Operations, Other"
      }
    ]
  },
  {
    "code": "29.03",
    "title": "Military Applied Sciences",
    "parentCode": "29",
    "parentTitle": "MILITARY TECHNOLOGIES",
    "majors": [
      {
        "id": "cip-29-0301",
        "code": "29.0301",
        "title": "Combat Systems Engineering"
      },
      {
        "id": "cip-29-0302",
        "code": "29.0302",
        "title": "Directed Energy Systems"
      },
      {
        "id": "cip-29-0303",
        "code": "29.0303",
        "title": "Engineering Acoustics"
      },
      {
        "id": "cip-29-0304",
        "code": "29.0304",
        "title": "Low-Observables and Stealth Technology"
      },
      {
        "id": "cip-29-0305",
        "code": "29.0305",
        "title": "Space Systems Operations"
      },
      {
        "id": "cip-29-0306",
        "code": "29.0306",
        "title": "Operational Oceanography"
      },
      {
        "id": "cip-29-0307",
        "code": "29.0307",
        "title": "Undersea Warfare"
      },
      {
        "id": "cip-29-0399",
        "code": "29.0399",
        "title": "Military Applied Sciences, Other"
      }
    ]
  },
  {
    "code": "29.04",
    "title": "Military Systems and Maintenance Technology",
    "parentCode": "29",
    "parentTitle": "MILITARY TECHNOLOGIES",
    "majors": [
      {
        "id": "cip-29-0401",
        "code": "29.0401",
        "title": "Aerospace Ground Equipment Technology"
      },
      {
        "id": "cip-29-0402",
        "code": "29.0402",
        "title": "Air and Space Operations Technology"
      },
      {
        "id": "cip-29-0403",
        "code": "29.0403",
        "title": "Aircraft Armament Systems Technology"
      },
      {
        "id": "cip-29-0404",
        "code": "29.0404",
        "title": "Explosive Ordinance/Bomb Disposal"
      },
      {
        "id": "cip-29-0405",
        "code": "29.0405",
        "title": "Joint Command/Task Force (C3, C4I) Systems"
      },
      {
        "id": "cip-29-0406",
        "code": "29.0406",
        "title": "Military Information Systems Technology"
      },
      {
        "id": "cip-29-0407",
        "code": "29.0407",
        "title": "Missile and Space Systems Technology"
      },
      {
        "id": "cip-29-0408",
        "code": "29.0408",
        "title": "Munitions Systems/Ordinance Technology"
      },
      {
        "id": "cip-29-0409",
        "code": "29.0409",
        "title": "Radar Communications and Systems Technology"
      },
      {
        "id": "cip-29-0499",
        "code": "29.0499",
        "title": "Military Systems and Maintenance Technology, Other"
      }
    ]
  },
  {
    "code": "29.99",
    "title": "Military Technologies and Applied Sciences, Other",
    "parentCode": "29",
    "parentTitle": "MILITARY TECHNOLOGIES",
    "majors": [
      {
        "id": "cip-29-9999",
        "code": "29.9999",
        "title": "Military Technologies and Applied Sciences, Other"
      }
    ]
  },
  {
    "code": "30.00",
    "title": "Multi-/Interdisciplinary Studies, General",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-0000",
        "code": "30.0000",
        "title": "Multi-/Interdisciplinary Studies, General"
      }
    ]
  },
  {
    "code": "30.01",
    "title": "Biological and Physical Sciences",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-0101",
        "code": "30.0101",
        "title": "Biological and Physical Sciences"
      }
    ]
  },
  {
    "code": "30.05",
    "title": "Peace Studies and Conflict Resolution",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-0501",
        "code": "30.0501",
        "title": "Peace Studies and Conflict Resolution"
      }
    ]
  },
  {
    "code": "30.06",
    "title": "Systems Science and Theory",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-0601",
        "code": "30.0601",
        "title": "Systems Science and Theory"
      }
    ]
  },
  {
    "code": "30.08",
    "title": "Mathematics and Computer Science",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-0801",
        "code": "30.0801",
        "title": "Mathematics and Computer Science"
      }
    ]
  },
  {
    "code": "30.10",
    "title": "Biopsychology",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1001",
        "code": "30.1001",
        "title": "Biopsychology"
      }
    ]
  },
  {
    "code": "30.11",
    "title": "Gerontology",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1101",
        "code": "30.1101",
        "title": "Gerontology"
      }
    ]
  },
  {
    "code": "30.12",
    "title": "Historic Preservation and Conservation",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1201",
        "code": "30.1201",
        "title": "Historic Preservation and Conservation"
      },
      {
        "id": "cip-30-1202",
        "code": "30.1202",
        "title": "Cultural Resource Management and Policy Analysis"
      },
      {
        "id": "cip-30-1299",
        "code": "30.1299",
        "title": "Historic Preservation and Conservation, Other"
      }
    ]
  },
  {
    "code": "30.13",
    "title": "Medieval and Renaissance Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1301",
        "code": "30.1301",
        "title": "Medieval and Renaissance Studies"
      }
    ]
  },
  {
    "code": "30.14",
    "title": "Museology/Museum Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1401",
        "code": "30.1401",
        "title": "Museology/Museum Studies"
      }
    ]
  },
  {
    "code": "30.15",
    "title": "Science, Technology and Society",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1501",
        "code": "30.1501",
        "title": "Science, Technology and Society"
      }
    ]
  },
  {
    "code": "30.16",
    "title": "Accounting and Computer Science",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1601",
        "code": "30.1601",
        "title": "Accounting and Computer Science"
      }
    ]
  },
  {
    "code": "30.17",
    "title": "Behavioral Sciences",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1701",
        "code": "30.1701",
        "title": "Behavioral Sciences"
      }
    ]
  },
  {
    "code": "30.18",
    "title": "Natural Sciences",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1801",
        "code": "30.1801",
        "title": "Natural Sciences"
      }
    ]
  },
  {
    "code": "30.19",
    "title": "Nutrition Sciences",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-1901",
        "code": "30.1901",
        "title": "Nutrition Sciences"
      }
    ]
  },
  {
    "code": "30.20",
    "title": "International/Global Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2001",
        "code": "30.2001",
        "title": "International/Global Studies"
      }
    ]
  },
  {
    "code": "30.21",
    "title": "Holocaust and Related Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2101",
        "code": "30.2101",
        "title": "Holocaust and Related Studies"
      }
    ]
  },
  {
    "code": "30.22",
    "title": "Classical and Ancient Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2201",
        "code": "30.2201",
        "title": "Ancient Studies/Civilization"
      },
      {
        "id": "cip-30-2202",
        "code": "30.2202",
        "title": "Classical, Ancient Mediterranean and Near Eastern Studies and Archaeology"
      }
    ]
  },
  {
    "code": "30.23",
    "title": "Intercultural/Multicultural and Diversity Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2301",
        "code": "30.2301",
        "title": "Intercultural/Multicultural and Diversity Studies"
      }
    ]
  },
  {
    "code": "30.25",
    "title": "Cognitive Science",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2501",
        "code": "30.2501",
        "title": "Cognitive Science"
      }
    ]
  },
  {
    "code": "30.26",
    "title": "Cultural Studies/Critical Theory and Analysis",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2601",
        "code": "30.2601",
        "title": "Cultural Studies/Critical Theory and Analysis"
      }
    ]
  },
  {
    "code": "30.27",
    "title": "Human Biology",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2701",
        "code": "30.2701",
        "title": "Human Biology"
      }
    ]
  },
  {
    "code": "30.28",
    "title": "Dispute Resolution",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2801",
        "code": "30.2801",
        "title": "Dispute Resolution"
      }
    ]
  },
  {
    "code": "30.29",
    "title": "Maritime Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-2901",
        "code": "30.2901",
        "title": "Maritime Studies"
      }
    ]
  },
  {
    "code": "30.30",
    "title": "Computational Science",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-3001",
        "code": "30.3001",
        "title": "Computational Science"
      }
    ]
  },
  {
    "code": "30.31",
    "title": "Human Computer Interaction",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-3101",
        "code": "30.3101",
        "title": "Human Computer Interaction"
      }
    ]
  },
  {
    "code": "30.32",
    "title": "Marine Sciences",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-3201",
        "code": "30.3201",
        "title": "Marine Sciences"
      }
    ]
  },
  {
    "code": "30.33",
    "title": "Sustainability Studies",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-3301",
        "code": "30.3301",
        "title": "Sustainability Studies"
      }
    ]
  },
  {
    "code": "30.99",
    "title": "Multi/Interdisciplinary Studies, Other",
    "parentCode": "30",
    "parentTitle": "MULTI/INTERDISCIPLINARY STUDIES",
    "majors": [
      {
        "id": "cip-30-9999",
        "code": "30.9999",
        "title": "Multi-/Interdisciplinary Studies, Other"
      }
    ]
  },
  {
    "code": "31.01",
    "title": "Parks, Recreation and Leisure Studies",
    "parentCode": "31",
    "parentTitle": "PARKS, RECREATION, LEISURE, AND FITNESS STUDIES",
    "majors": [
      {
        "id": "cip-31-0101",
        "code": "31.0101",
        "title": "Parks, Recreation and Leisure Studies"
      }
    ]
  },
  {
    "code": "31.03",
    "title": "Parks, Recreation and Leisure Facilities Management",
    "parentCode": "31",
    "parentTitle": "PARKS, RECREATION, LEISURE, AND FITNESS STUDIES",
    "majors": [
      {
        "id": "cip-31-0301",
        "code": "31.0301",
        "title": "Parks, Recreation and Leisure Facilities Management"
      },
      {
        "id": "cip-31-0302",
        "code": "31.0302",
        "title": "Golf Course Operation and Grounds Management"
      },
      {
        "id": "cip-31-0399",
        "code": "31.0399",
        "title": "Parks, Recreation and Leisure Facilities Management, Other"
      }
    ]
  },
  {
    "code": "31.05",
    "title": "Health and Physical Education/Fitness",
    "parentCode": "31",
    "parentTitle": "PARKS, RECREATION, LEISURE, AND FITNESS STUDIES",
    "majors": [
      {
        "id": "cip-31-0501",
        "code": "31.0501",
        "title": "Health and Physical Education, General"
      },
      {
        "id": "cip-31-0504",
        "code": "31.0504",
        "title": "Sport and Fitness Administration/Management"
      },
      {
        "id": "cip-31-0505",
        "code": "31.0505",
        "title": "Kinesiology and Exercise Science"
      },
      {
        "id": "cip-31-0507",
        "code": "31.0507",
        "title": "Physical Fitness Technician"
      },
      {
        "id": "cip-31-0508",
        "code": "31.0508",
        "title": "Sports Studies"
      },
      {
        "id": "cip-31-0599",
        "code": "31.0599",
        "title": "Health and Physical Education/Fitness, Other"
      }
    ]
  },
  {
    "code": "31.06",
    "title": "Outdoor Education",
    "parentCode": "31",
    "parentTitle": "PARKS, RECREATION, LEISURE, AND FITNESS STUDIES",
    "majors": [
      {
        "id": "cip-31-0601",
        "code": "31.0601",
        "title": "Outdoor Education"
      }
    ]
  },
  {
    "code": "31.99",
    "title": "Parks, Recreation, Leisure, and Fitness Studies, Other",
    "parentCode": "31",
    "parentTitle": "PARKS, RECREATION, LEISURE, AND FITNESS STUDIES",
    "majors": [
      {
        "id": "cip-31-9999",
        "code": "31.9999",
        "title": "Parks, Recreation, Leisure, and Fitness Studies, Other"
      }
    ]
  },
  {
    "code": "32.01",
    "title": "Basic Skills",
    "parentCode": "32",
    "parentTitle": "BASIC SKILLS",
    "majors": [
      {
        "id": "cip-32-0101",
        "code": "32.0101",
        "title": "Basic Skills, General"
      },
      {
        "id": "cip-32-0104",
        "code": "32.0104",
        "title": "Numeracy and Computational Skills"
      },
      {
        "id": "cip-32-0105",
        "code": "32.0105",
        "title": "Job-Seeking/Changing Skills"
      },
      {
        "id": "cip-32-0107",
        "code": "32.0107",
        "title": "Career Exploration/Awareness Skills"
      },
      {
        "id": "cip-32-0108",
        "code": "32.0108",
        "title": "Literacy and Communication Skills"
      },
      {
        "id": "cip-32-0109",
        "code": "32.0109",
        "title": "Second Language Learning"
      },
      {
        "id": "cip-32-0110",
        "code": "32.0110",
        "title": "Basic Computer Skills"
      },
      {
        "id": "cip-32-0111",
        "code": "32.0111",
        "title": "Workforce Development and Training"
      },
      {
        "id": "cip-32-0199",
        "code": "32.0199",
        "title": "Basic Skills, Other"
      }
    ]
  },
  {
    "code": "33.01",
    "title": "Citizenship Activities",
    "parentCode": "33",
    "parentTitle": "CITIZENSHIP ACTIVITIES",
    "majors": [
      {
        "id": "cip-33-0101",
        "code": "33.0101",
        "title": "Citizenship Activities, General"
      },
      {
        "id": "cip-33-0102",
        "code": "33.0102",
        "title": "American Citizenship Education"
      },
      {
        "id": "cip-33-0103",
        "code": "33.0103",
        "title": "Community Awareness"
      },
      {
        "id": "cip-33-0104",
        "code": "33.0104",
        "title": "Community Involvement"
      },
      {
        "id": "cip-33-0105",
        "code": "33.0105",
        "title": "Canadian Citizenship Education"
      },
      {
        "id": "cip-33-0199",
        "code": "33.0199",
        "title": "Citizenship Activities, Other"
      }
    ]
  },
  {
    "code": "34.01",
    "title": "Health-Related Knowledge and Skills",
    "parentCode": "34",
    "parentTitle": "HEALTH-RELATED KNOWLEDGE AND SKILLS",
    "majors": [
      {
        "id": "cip-34-0102",
        "code": "34.0102",
        "title": "Birthing and Parenting Knowledge and Skills"
      },
      {
        "id": "cip-34-0103",
        "code": "34.0103",
        "title": "Personal Health Improvement and Maintenance"
      },
      {
        "id": "cip-34-0104",
        "code": "34.0104",
        "title": "Addiction Prevention and Treatment"
      },
      {
        "id": "cip-34-0199",
        "code": "34.0199",
        "title": "Health-Related Knowledge and Skills, Other"
      }
    ]
  },
  {
    "code": "35.01",
    "title": "Interpersonal and Social Skills",
    "parentCode": "35",
    "parentTitle": "INTERPERSONAL AND SOCIAL SKILLS",
    "majors": [
      {
        "id": "cip-35-0101",
        "code": "35.0101",
        "title": "Interpersonal and Social Skills, General"
      },
      {
        "id": "cip-35-0102",
        "code": "35.0102",
        "title": "Interpersonal Relationships Skills"
      },
      {
        "id": "cip-35-0103",
        "code": "35.0103",
        "title": "Business and Social Skills"
      },
      {
        "id": "cip-35-0199",
        "code": "35.0199",
        "title": "Interpersonal Social Skills, Other"
      }
    ]
  },
  {
    "code": "36.01",
    "title": "Leisure and Recreational Activities",
    "parentCode": "36",
    "parentTitle": "LEISURE AND RECREATIONAL ACTIVITIES",
    "majors": [
      {
        "id": "cip-36-0101",
        "code": "36.0101",
        "title": "Leisure and Recreational Activities, General"
      },
      {
        "id": "cip-36-0102",
        "code": "36.0102",
        "title": "Handicrafts and Model-Making"
      },
      {
        "id": "cip-36-0103",
        "code": "36.0103",
        "title": "Board, Card and Role-Playing Games"
      },
      {
        "id": "cip-36-0105",
        "code": "36.0105",
        "title": "Home Maintenance and Improvement"
      },
      {
        "id": "cip-36-0106",
        "code": "36.0106",
        "title": "Nature Appreciation"
      },
      {
        "id": "cip-36-0107",
        "code": "36.0107",
        "title": "Pet Ownership and Care"
      },
      {
        "id": "cip-36-0108",
        "code": "36.0108",
        "title": "Sports and Exercise"
      },
      {
        "id": "cip-36-0109",
        "code": "36.0109",
        "title": "Travel and Exploration"
      },
      {
        "id": "cip-36-0110",
        "code": "36.0110",
        "title": "Art"
      },
      {
        "id": "cip-36-0111",
        "code": "36.0111",
        "title": "Collecting"
      },
      {
        "id": "cip-36-0112",
        "code": "36.0112",
        "title": "Cooking and Other Domestic Skills"
      },
      {
        "id": "cip-36-0113",
        "code": "36.0113",
        "title": "Computer Games and Programming Skills"
      },
      {
        "id": "cip-36-0114",
        "code": "36.0114",
        "title": "Dancing"
      },
      {
        "id": "cip-36-0115",
        "code": "36.0115",
        "title": "Music"
      },
      {
        "id": "cip-36-0116",
        "code": "36.0116",
        "title": "Reading"
      },
      {
        "id": "cip-36-0117",
        "code": "36.0117",
        "title": "Theatre/Theater"
      },
      {
        "id": "cip-36-0118",
        "code": "36.0118",
        "title": "Writing"
      },
      {
        "id": "cip-36-0119",
        "code": "36.0119",
        "title": "Aircraft Pilot (Private)"
      },
      {
        "id": "cip-36-0199",
        "code": "36.0199",
        "title": "Leisure and Recreational Activities, Other"
      }
    ]
  },
  {
    "code": "37.01",
    "title": "Personal Awareness and Self-Improvement",
    "parentCode": "37",
    "parentTitle": "PERSONAL AWARENESS AND SELF-IMPROVEMENT",
    "majors": [
      {
        "id": "cip-37-0101",
        "code": "37.0101",
        "title": "Self-Awareness and Personal Assessment"
      },
      {
        "id": "cip-37-0102",
        "code": "37.0102",
        "title": "Stress Management and Coping Skills"
      },
      {
        "id": "cip-37-0103",
        "code": "37.0103",
        "title": "Personal Decision-Making Skills"
      },
      {
        "id": "cip-37-0104",
        "code": "37.0104",
        "title": "Self-Esteem and Values Clarification"
      },
      {
        "id": "cip-37-0199",
        "code": "37.0199",
        "title": "Personal Awareness and Self-Improvement, Other"
      }
    ]
  },
  {
    "code": "38.00",
    "title": "Philosophy and Religious Studies, General",
    "parentCode": "38",
    "parentTitle": "PHILOSOPHY AND RELIGIOUS STUDIES",
    "majors": [
      {
        "id": "cip-38-0001",
        "code": "38.0001",
        "title": "Philosophy and Religious Studies, General"
      }
    ]
  },
  {
    "code": "38.01",
    "title": "Philosophy",
    "parentCode": "38",
    "parentTitle": "PHILOSOPHY AND RELIGIOUS STUDIES",
    "majors": [
      {
        "id": "cip-38-0101",
        "code": "38.0101",
        "title": "Philosophy"
      },
      {
        "id": "cip-38-0102",
        "code": "38.0102",
        "title": "Logic"
      },
      {
        "id": "cip-38-0103",
        "code": "38.0103",
        "title": "Ethics"
      },
      {
        "id": "cip-38-0104",
        "code": "38.0104",
        "title": "Applied and Professional Ethics"
      },
      {
        "id": "cip-38-0199",
        "code": "38.0199",
        "title": "Philosophy, Other"
      }
    ]
  },
  {
    "code": "38.02",
    "title": "Religion/Religious Studies",
    "parentCode": "38",
    "parentTitle": "PHILOSOPHY AND RELIGIOUS STUDIES",
    "majors": [
      {
        "id": "cip-38-0201",
        "code": "38.0201",
        "title": "Religion/Religious Studies"
      },
      {
        "id": "cip-38-0202",
        "code": "38.0202",
        "title": "Buddhist Studies"
      },
      {
        "id": "cip-38-0203",
        "code": "38.0203",
        "title": "Christian Studies"
      },
      {
        "id": "cip-38-0204",
        "code": "38.0204",
        "title": "Hindu Studies"
      },
      {
        "id": "cip-38-0205",
        "code": "38.0205",
        "title": "Islamic Studies"
      },
      {
        "id": "cip-38-0206",
        "code": "38.0206",
        "title": "Jewish/Judaic Studies"
      },
      {
        "id": "cip-38-0299",
        "code": "38.0299",
        "title": "Religion/Religious Studies, Other"
      }
    ]
  },
  {
    "code": "38.99",
    "title": "Philosophy and Religious Studies, Other",
    "parentCode": "38",
    "parentTitle": "PHILOSOPHY AND RELIGIOUS STUDIES",
    "majors": [
      {
        "id": "cip-38-9999",
        "code": "38.9999",
        "title": "Philosophy and Religious Studies, Other"
      }
    ]
  },
  {
    "code": "39.02",
    "title": "Bible/Biblical Studies",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0201",
        "code": "39.0201",
        "title": "Bible/Biblical Studies"
      }
    ]
  },
  {
    "code": "39.03",
    "title": "Missions/Missionary Studies and Missiology",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0301",
        "code": "39.0301",
        "title": "Missions/Missionary Studies and Missiology"
      }
    ]
  },
  {
    "code": "39.04",
    "title": "Religious Education",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0401",
        "code": "39.0401",
        "title": "Religious Education"
      }
    ]
  },
  {
    "code": "39.05",
    "title": "Religious/Sacred Music",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0501",
        "code": "39.0501",
        "title": "Religious/Sacred Music"
      }
    ]
  },
  {
    "code": "39.06",
    "title": "Theological and Ministerial Studies",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0601",
        "code": "39.0601",
        "title": "Theology/Theological Studies"
      },
      {
        "id": "cip-39-0602",
        "code": "39.0602",
        "title": "Divinity/Ministry (BD, MDiv.)"
      },
      {
        "id": "cip-39-0604",
        "code": "39.0604",
        "title": "Pre-Theology/Pre-Ministerial Studies"
      },
      {
        "id": "cip-39-0605",
        "code": "39.0605",
        "title": "Rabbinical Studies (M.H.L./Rav)"
      },
      {
        "id": "cip-39-0606",
        "code": "39.0606",
        "title": "Talmudic Studies"
      },
      {
        "id": "cip-39-0699",
        "code": "39.0699",
        "title": "Theological and Ministerial Studies, Other"
      }
    ]
  },
  {
    "code": "39.07",
    "title": "Pastoral Counseling and Specialized Ministries",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-0701",
        "code": "39.0701",
        "title": "Pastoral Studies/Counseling"
      },
      {
        "id": "cip-39-0702",
        "code": "39.0702",
        "title": "Youth Ministry"
      },
      {
        "id": "cip-39-0703",
        "code": "39.0703",
        "title": "Urban Ministry"
      },
      {
        "id": "cip-39-0704",
        "code": "39.0704",
        "title": "Women's Ministry"
      },
      {
        "id": "cip-39-0705",
        "code": "39.0705",
        "title": "Lay Ministry"
      },
      {
        "id": "cip-39-0799",
        "code": "39.0799",
        "title": "Pastoral Counseling and Specialized Ministries, Other"
      }
    ]
  },
  {
    "code": "39.99",
    "title": "Theology and Religious Vocations, Other",
    "parentCode": "39",
    "parentTitle": "THEOLOGY AND RELIGIOUS VOCATIONS",
    "majors": [
      {
        "id": "cip-39-9999",
        "code": "39.9999",
        "title": "Theology and Religious Vocations, Other"
      }
    ]
  },
  {
    "code": "40.01",
    "title": "Physical Sciences",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0101",
        "code": "40.0101",
        "title": "Physical Sciences"
      }
    ]
  },
  {
    "code": "40.02",
    "title": "Astronomy and Astrophysics",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0201",
        "code": "40.0201",
        "title": "Astronomy"
      },
      {
        "id": "cip-40-0202",
        "code": "40.0202",
        "title": "Astrophysics"
      },
      {
        "id": "cip-40-0203",
        "code": "40.0203",
        "title": "Planetary Astronomy and Science"
      },
      {
        "id": "cip-40-0299",
        "code": "40.0299",
        "title": "Astronomy and Astrophysics, Other"
      }
    ]
  },
  {
    "code": "40.04",
    "title": "Atmospheric Sciences and Meteorology",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0401",
        "code": "40.0401",
        "title": "Atmospheric Sciences and Meteorology, General"
      },
      {
        "id": "cip-40-0402",
        "code": "40.0402",
        "title": "Atmospheric Chemistry and Climatology"
      },
      {
        "id": "cip-40-0403",
        "code": "40.0403",
        "title": "Atmospheric Physics and Dynamics"
      },
      {
        "id": "cip-40-0404",
        "code": "40.0404",
        "title": "Meteorology"
      },
      {
        "id": "cip-40-0499",
        "code": "40.0499",
        "title": "Atmospheric Sciences and Meteorology, Other"
      }
    ]
  },
  {
    "code": "40.05",
    "title": "Chemistry",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0501",
        "code": "40.0501",
        "title": "Chemistry, General"
      },
      {
        "id": "cip-40-0502",
        "code": "40.0502",
        "title": "Analytical Chemistry"
      },
      {
        "id": "cip-40-0503",
        "code": "40.0503",
        "title": "Inorganic Chemistry"
      },
      {
        "id": "cip-40-0504",
        "code": "40.0504",
        "title": "Organic Chemistry"
      },
      {
        "id": "cip-40-0506",
        "code": "40.0506",
        "title": "Physical and Theoretical Chemistry"
      },
      {
        "id": "cip-40-0507",
        "code": "40.0507",
        "title": "Polymer Chemistry"
      },
      {
        "id": "cip-40-0508",
        "code": "40.0508",
        "title": "Chemical Physics"
      },
      {
        "id": "cip-40-0509",
        "code": "40.0509",
        "title": "Environmental Chemistry"
      },
      {
        "id": "cip-40-0510",
        "code": "40.0510",
        "title": "Forensic Chemistry"
      },
      {
        "id": "cip-40-0511",
        "code": "40.0511",
        "title": "Theoretical Chemistry"
      },
      {
        "id": "cip-40-0599",
        "code": "40.0599",
        "title": "Chemistry, Other"
      }
    ]
  },
  {
    "code": "40.06",
    "title": "Geological and Earth Sciences/Geosciences",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0601",
        "code": "40.0601",
        "title": "Geology/Earth Science, General"
      },
      {
        "id": "cip-40-0602",
        "code": "40.0602",
        "title": "Geochemistry"
      },
      {
        "id": "cip-40-0603",
        "code": "40.0603",
        "title": "Geophysics and Seismology"
      },
      {
        "id": "cip-40-0604",
        "code": "40.0604",
        "title": "Paleontology"
      },
      {
        "id": "cip-40-0605",
        "code": "40.0605",
        "title": "Hydrology and Water Resources Science"
      },
      {
        "id": "cip-40-0606",
        "code": "40.0606",
        "title": "Geochemistry and Petrology"
      },
      {
        "id": "cip-40-0607",
        "code": "40.0607",
        "title": "Oceanography, Chemical and Physical"
      },
      {
        "id": "cip-40-0699",
        "code": "40.0699",
        "title": "Geological and Earth Sciences/Geosciences, Other"
      }
    ]
  },
  {
    "code": "40.08",
    "title": "Physics",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-0801",
        "code": "40.0801",
        "title": "Physics, General"
      },
      {
        "id": "cip-40-0802",
        "code": "40.0802",
        "title": "Atomic/Molecular Physics"
      },
      {
        "id": "cip-40-0804",
        "code": "40.0804",
        "title": "Elementary Particle Physics"
      },
      {
        "id": "cip-40-0805",
        "code": "40.0805",
        "title": "Plasma and High-Temperature Physics"
      },
      {
        "id": "cip-40-0806",
        "code": "40.0806",
        "title": "Nuclear Physics"
      },
      {
        "id": "cip-40-0807",
        "code": "40.0807",
        "title": "Optics/Optical Sciences"
      },
      {
        "id": "cip-40-0808",
        "code": "40.0808",
        "title": "Solid State and Low-Temperature Physics"
      },
      {
        "id": "cip-40-0809",
        "code": "40.0809",
        "title": "Acoustics"
      },
      {
        "id": "cip-40-0810",
        "code": "40.0810",
        "title": "Theoretical and Mathematical Physics"
      },
      {
        "id": "cip-40-0899",
        "code": "40.0899",
        "title": "Physics, Other"
      }
    ]
  },
  {
    "code": "40.10",
    "title": "Materials Science",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-1001",
        "code": "40.1001",
        "title": "Materials Science"
      },
      {
        "id": "cip-40-1002",
        "code": "40.1002",
        "title": "Materials Chemistry"
      },
      {
        "id": "cip-40-1099",
        "code": "40.1099",
        "title": "Materials Sciences, Other"
      }
    ]
  },
  {
    "code": "40.99",
    "title": "Physical Sciences, Other",
    "parentCode": "40",
    "parentTitle": "PHYSICAL SCIENCES",
    "majors": [
      {
        "id": "cip-40-9999",
        "code": "40.9999",
        "title": "Physical Sciences, Other"
      }
    ]
  },
  {
    "code": "41.00",
    "title": "Science Technologies/Technicians, General",
    "parentCode": "41",
    "parentTitle": "SCIENCE TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-41-0000",
        "code": "41.0000",
        "title": "Science Technologies/Technicians, General"
      }
    ]
  },
  {
    "code": "41.01",
    "title": "Biology Technician/Biotechnology Laboratory Technician",
    "parentCode": "41",
    "parentTitle": "SCIENCE TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-41-0101",
        "code": "41.0101",
        "title": "Biology Technician/Biotechnology Laboratory Technician"
      }
    ]
  },
  {
    "code": "41.02",
    "title": "Nuclear and Industrial Radiologic Technologies/Technicians",
    "parentCode": "41",
    "parentTitle": "SCIENCE TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-41-0204",
        "code": "41.0204",
        "title": "Industrial Radiologic Technology/Technician"
      },
      {
        "id": "cip-41-0205",
        "code": "41.0205",
        "title": "Nuclear/Nuclear Power Technology/Technician"
      },
      {
        "id": "cip-41-0299",
        "code": "41.0299",
        "title": "Nuclear and Industrial Radiologic Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "41.03",
    "title": "Physical Science Technologies/Technicians",
    "parentCode": "41",
    "parentTitle": "SCIENCE TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-41-0301",
        "code": "41.0301",
        "title": "Chemical Technology/Technician"
      },
      {
        "id": "cip-41-0303",
        "code": "41.0303",
        "title": "Chemical Process Technology"
      },
      {
        "id": "cip-41-0399",
        "code": "41.0399",
        "title": "Physical Science Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "41.99",
    "title": "Science Technologies/Technicians, Other",
    "parentCode": "41",
    "parentTitle": "SCIENCE TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-41-9999",
        "code": "41.9999",
        "title": "Science Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "42.01",
    "title": "Psychology, General",
    "parentCode": "42",
    "parentTitle": "PSYCHOLOGY",
    "majors": [
      {
        "id": "cip-42-0101",
        "code": "42.0101",
        "title": "Psychology, General"
      }
    ]
  },
  {
    "code": "42.27",
    "title": "Research and Experimental Psychology",
    "parentCode": "42",
    "parentTitle": "PSYCHOLOGY",
    "majors": [
      {
        "id": "cip-42-2701",
        "code": "42.2701",
        "title": "Cognitive Psychology and Psycholinguistics"
      },
      {
        "id": "cip-42-2702",
        "code": "42.2702",
        "title": "Comparative Psychology"
      },
      {
        "id": "cip-42-2703",
        "code": "42.2703",
        "title": "Developmental and Child Psychology"
      },
      {
        "id": "cip-42-2704",
        "code": "42.2704",
        "title": "Experimental Psychology"
      },
      {
        "id": "cip-42-2705",
        "code": "42.2705",
        "title": "Personality Psychology"
      },
      {
        "id": "cip-42-2706",
        "code": "42.2706",
        "title": "Physiological Psychology/Psychobiology"
      },
      {
        "id": "cip-42-2707",
        "code": "42.2707",
        "title": "Social Psychology"
      },
      {
        "id": "cip-42-2708",
        "code": "42.2708",
        "title": "Psychometrics and Quantitative Psychology"
      },
      {
        "id": "cip-42-2709",
        "code": "42.2709",
        "title": "Psychopharmacology"
      },
      {
        "id": "cip-42-2799",
        "code": "42.2799",
        "title": "Research and Experimental Psychology, Other"
      }
    ]
  },
  {
    "code": "42.28",
    "title": "Clinical, Counseling and Applied Psychology",
    "parentCode": "42",
    "parentTitle": "PSYCHOLOGY",
    "majors": [
      {
        "id": "cip-42-2801",
        "code": "42.2801",
        "title": "Clinical Psychology"
      },
      {
        "id": "cip-42-2802",
        "code": "42.2802",
        "title": "Community Psychology"
      },
      {
        "id": "cip-42-2803",
        "code": "42.2803",
        "title": "Counseling Psychology"
      },
      {
        "id": "cip-42-2804",
        "code": "42.2804",
        "title": "Industrial and Organizational Psychology"
      },
      {
        "id": "cip-42-2805",
        "code": "42.2805",
        "title": "School Psychology"
      },
      {
        "id": "cip-42-2806",
        "code": "42.2806",
        "title": "Educational Psychology"
      },
      {
        "id": "cip-42-2807",
        "code": "42.2807",
        "title": "Clinical Child Psychology"
      },
      {
        "id": "cip-42-2808",
        "code": "42.2808",
        "title": "Environmental Psychology"
      },
      {
        "id": "cip-42-2809",
        "code": "42.2809",
        "title": "Geropsychology"
      },
      {
        "id": "cip-42-2810",
        "code": "42.2810",
        "title": "Health/Medical Psychology"
      },
      {
        "id": "cip-42-2811",
        "code": "42.2811",
        "title": "Family Psychology"
      },
      {
        "id": "cip-42-2812",
        "code": "42.2812",
        "title": "Forensic Psychology"
      },
      {
        "id": "cip-42-2813",
        "code": "42.2813",
        "title": "Applied Psychology"
      },
      {
        "id": "cip-42-2814",
        "code": "42.2814",
        "title": "Applied Behavior Analysis"
      },
      {
        "id": "cip-42-2899",
        "code": "42.2899",
        "title": "Clinical, Counseling and Applied Psychology, Other"
      }
    ]
  },
  {
    "code": "42.99",
    "title": "Psychology, Other",
    "parentCode": "42",
    "parentTitle": "PSYCHOLOGY",
    "majors": [
      {
        "id": "cip-42-9999",
        "code": "42.9999",
        "title": "Psychology, Other"
      }
    ]
  },
  {
    "code": "43.01",
    "title": "Criminal Justice and Corrections",
    "parentCode": "43",
    "parentTitle": "SECURITY AND PROTECTIVE SERVICES",
    "majors": [
      {
        "id": "cip-43-0102",
        "code": "43.0102",
        "title": "Corrections"
      },
      {
        "id": "cip-43-0103",
        "code": "43.0103",
        "title": "Criminal Justice/Law Enforcement Administration"
      },
      {
        "id": "cip-43-0104",
        "code": "43.0104",
        "title": "Criminal Justice/Safety Studies"
      },
      {
        "id": "cip-43-0106",
        "code": "43.0106",
        "title": "Forensic Science and Technology"
      },
      {
        "id": "cip-43-0107",
        "code": "43.0107",
        "title": "Criminal Justice/Police Science"
      },
      {
        "id": "cip-43-0109",
        "code": "43.0109",
        "title": "Security and Loss Prevention Services"
      },
      {
        "id": "cip-43-0110",
        "code": "43.0110",
        "title": "Juvenile Corrections"
      },
      {
        "id": "cip-43-0111",
        "code": "43.0111",
        "title": "Criminalistics and Criminal Science"
      },
      {
        "id": "cip-43-0112",
        "code": "43.0112",
        "title": "Securities Services Administration/Management"
      },
      {
        "id": "cip-43-0113",
        "code": "43.0113",
        "title": "Corrections Administration"
      },
      {
        "id": "cip-43-0114",
        "code": "43.0114",
        "title": "Law Enforcement Investigation and Interviewing"
      },
      {
        "id": "cip-43-0115",
        "code": "43.0115",
        "title": "Law Enforcement Record-Keeping and Evidence Management"
      },
      {
        "id": "cip-43-0116",
        "code": "43.0116",
        "title": "Cyber/Computer Forensics and Counterterrorism"
      },
      {
        "id": "cip-43-0117",
        "code": "43.0117",
        "title": "Financial Forensics and Fraud Investigation"
      },
      {
        "id": "cip-43-0118",
        "code": "43.0118",
        "title": "Law Enforcement Intelligence Analysis"
      },
      {
        "id": "cip-43-0119",
        "code": "43.0119",
        "title": "Critical Incident Response/Special Police Operations"
      },
      {
        "id": "cip-43-0120",
        "code": "43.0120",
        "title": "Protective Services Operations"
      },
      {
        "id": "cip-43-0121",
        "code": "43.0121",
        "title": "Suspension and Debarment Investigation"
      },
      {
        "id": "cip-43-0122",
        "code": "43.0122",
        "title": "Maritime Law Enforcement"
      },
      {
        "id": "cip-43-0123",
        "code": "43.0123",
        "title": "Cultural/Archaelogical Resources Protection"
      },
      {
        "id": "cip-43-0199",
        "code": "43.0199",
        "title": "Corrections and Criminal Justice, Other"
      }
    ]
  },
  {
    "code": "43.02",
    "title": "Fire Protection",
    "parentCode": "43",
    "parentTitle": "SECURITY AND PROTECTIVE SERVICES",
    "majors": [
      {
        "id": "cip-43-0201",
        "code": "43.0201",
        "title": "Fire Protection and Safety Technology/Technician"
      },
      {
        "id": "cip-43-0202",
        "code": "43.0202",
        "title": "Fire Services Administration"
      },
      {
        "id": "cip-43-0203",
        "code": "43.0203",
        "title": "Fire Science/Fire-fighting"
      },
      {
        "id": "cip-43-0204",
        "code": "43.0204",
        "title": "Fire Systems Technology"
      },
      {
        "id": "cip-43-0205",
        "code": "43.0205",
        "title": "Fire/Arson Investigation and Prevention"
      },
      {
        "id": "cip-43-0206",
        "code": "43.0206",
        "title": "Wildland/Forest Firefighting and Investigation"
      },
      {
        "id": "cip-43-0299",
        "code": "43.0299",
        "title": "Fire Protection, Other"
      }
    ]
  },
  {
    "code": "43.03",
    "title": "Homeland Security",
    "parentCode": "43",
    "parentTitle": "SECURITY AND PROTECTIVE SERVICES",
    "majors": [
      {
        "id": "cip-43-0301",
        "code": "43.0301",
        "title": "Homeland Security"
      },
      {
        "id": "cip-43-0302",
        "code": "43.0302",
        "title": "Crisis/Emergency/Disaster Management"
      },
      {
        "id": "cip-43-0303",
        "code": "43.0303",
        "title": "Critical Infrastructure Protection"
      },
      {
        "id": "cip-43-0304",
        "code": "43.0304",
        "title": "Terrorism and Counterterrorism Operations"
      },
      {
        "id": "cip-43-0399",
        "code": "43.0399",
        "title": "Homeland Security, Other"
      }
    ]
  },
  {
    "code": "43.99",
    "title": "Security and Protective Services, Other",
    "parentCode": "43",
    "parentTitle": "SECURITY AND PROTECTIVE SERVICES",
    "majors": [
      {
        "id": "cip-43-9999",
        "code": "43.9999",
        "title": "Security and Protective Services, Other"
      }
    ]
  },
  {
    "code": "44.00",
    "title": "Human Services, General",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-0000",
        "code": "44.0000",
        "title": "Human Services, General"
      }
    ]
  },
  {
    "code": "44.02",
    "title": "Community Organization and Advocacy",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-0201",
        "code": "44.0201",
        "title": "Community Organization and Advocacy"
      }
    ]
  },
  {
    "code": "44.04",
    "title": "Public Administration",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-0401",
        "code": "44.0401",
        "title": "Public Administration"
      }
    ]
  },
  {
    "code": "44.05",
    "title": "Public Policy Analysis",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-0501",
        "code": "44.0501",
        "title": "Public Policy Analysis"
      },
      {
        "id": "cip-44-0502",
        "code": "44.0502",
        "title": "Education Policy Analysis"
      },
      {
        "id": "cip-44-0503",
        "code": "44.0503",
        "title": "Health Policy Analysis"
      },
      {
        "id": "cip-44-0504",
        "code": "44.0504",
        "title": "International Policy Analysis"
      },
      {
        "id": "cip-44-0599",
        "code": "44.0599",
        "title": "Public Policy Analysis, Other"
      }
    ]
  },
  {
    "code": "44.07",
    "title": "Social Work",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-0701",
        "code": "44.0701",
        "title": "Social Work"
      },
      {
        "id": "cip-44-0702",
        "code": "44.0702",
        "title": "Youth Services/Administration"
      },
      {
        "id": "cip-44-0799",
        "code": "44.0799",
        "title": "Social Work, Other"
      }
    ]
  },
  {
    "code": "44.99",
    "title": "Public Administration and Social Service Professions, Other",
    "parentCode": "44",
    "parentTitle": "PUBLIC ADMINISTRATION AND SOCIAL SERVICE PROFESSIONS",
    "majors": [
      {
        "id": "cip-44-9999",
        "code": "44.9999",
        "title": "Public Administration and Social Service Professions, Other"
      }
    ]
  },
  {
    "code": "45.01",
    "title": "Social Sciences, General",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0101",
        "code": "45.0101",
        "title": "Social Sciences, General"
      },
      {
        "id": "cip-45-0102",
        "code": "45.0102",
        "title": "Research Methodology and Quantitative Methods"
      }
    ]
  },
  {
    "code": "45.02",
    "title": "Anthropology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0201",
        "code": "45.0201",
        "title": "Anthropology"
      },
      {
        "id": "cip-45-0202",
        "code": "45.0202",
        "title": "Physical Anthropology"
      },
      {
        "id": "cip-45-0203",
        "code": "45.0203",
        "title": "Medical Anthropology"
      },
      {
        "id": "cip-45-0204",
        "code": "45.0204",
        "title": "Cultural Anthropology"
      },
      {
        "id": "cip-45-0299",
        "code": "45.0299",
        "title": "Anthropology, Other"
      }
    ]
  },
  {
    "code": "45.03",
    "title": "Archeology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0301",
        "code": "45.0301",
        "title": "Archeology"
      }
    ]
  },
  {
    "code": "45.04",
    "title": "Criminology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0401",
        "code": "45.0401",
        "title": "Criminology"
      }
    ]
  },
  {
    "code": "45.05",
    "title": "Demography and Population Studies",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0501",
        "code": "45.0501",
        "title": "Demography and Population Studies"
      }
    ]
  },
  {
    "code": "45.06",
    "title": "Economics",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0601",
        "code": "45.0601",
        "title": "Economics, General"
      },
      {
        "id": "cip-45-0602",
        "code": "45.0602",
        "title": "Applied Economics"
      },
      {
        "id": "cip-45-0603",
        "code": "45.0603",
        "title": "Econometrics and Quantitative Economics"
      },
      {
        "id": "cip-45-0604",
        "code": "45.0604",
        "title": "Development Economics and International Development"
      },
      {
        "id": "cip-45-0605",
        "code": "45.0605",
        "title": "International Economics"
      },
      {
        "id": "cip-45-0699",
        "code": "45.0699",
        "title": "Economics, Other"
      }
    ]
  },
  {
    "code": "45.07",
    "title": "Geography and Cartography",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0701",
        "code": "45.0701",
        "title": "Geography"
      },
      {
        "id": "cip-45-0702",
        "code": "45.0702",
        "title": "Cartography"
      },
      {
        "id": "cip-45-0799",
        "code": "45.0799",
        "title": "Geography, Other"
      }
    ]
  },
  {
    "code": "45.09",
    "title": "International Relations and Affairs",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-0901",
        "code": "45.0901",
        "title": "International Relations and Affairs"
      },
      {
        "id": "cip-45-0902",
        "code": "45.0902",
        "title": "National Security Policy Studies"
      },
      {
        "id": "cip-45-0999",
        "code": "45.0999",
        "title": "International Relations and National Security Studies, Other"
      }
    ]
  },
  {
    "code": "45.10",
    "title": "Political Science and Government",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-1001",
        "code": "45.1001",
        "title": "Political Science and Government, General"
      },
      {
        "id": "cip-45-1002",
        "code": "45.1002",
        "title": "American Government and Politics (United States)"
      },
      {
        "id": "cip-45-1003",
        "code": "45.1003",
        "title": "Canadian Government and Politics"
      },
      {
        "id": "cip-45-1004",
        "code": "45.1004",
        "title": "Political Economy"
      },
      {
        "id": "cip-45-1099",
        "code": "45.1099",
        "title": "Political Science and Government, Other"
      }
    ]
  },
  {
    "code": "45.11",
    "title": "Sociology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-1101",
        "code": "45.1101",
        "title": "Sociology"
      }
    ]
  },
  {
    "code": "45.12",
    "title": "Urban Studies/Affairs",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-1201",
        "code": "45.1201",
        "title": "Urban Studies/Affairs"
      }
    ]
  },
  {
    "code": "45.13",
    "title": "Sociology and Anthropology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-1301",
        "code": "45.1301",
        "title": "Sociology and Anthropology"
      }
    ]
  },
  {
    "code": "45.14",
    "title": "Rural Sociology",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-1401",
        "code": "45.1401",
        "title": "Rural Sociology"
      }
    ]
  },
  {
    "code": "45.99",
    "title": "Social Sciences, Other",
    "parentCode": "45",
    "parentTitle": "SOCIAL SCIENCES",
    "majors": [
      {
        "id": "cip-45-9999",
        "code": "45.9999",
        "title": "Social Sciences, Other"
      }
    ]
  },
  {
    "code": "46.00",
    "title": "Construction Trades, General",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0000",
        "code": "46.0000",
        "title": "Construction Trades, General"
      }
    ]
  },
  {
    "code": "46.01",
    "title": "Mason/Masonry",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0101",
        "code": "46.0101",
        "title": "Mason/Masonry"
      }
    ]
  },
  {
    "code": "46.02",
    "title": "Carpenters",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0201",
        "code": "46.0201",
        "title": "Carpentry/Carpenter"
      }
    ]
  },
  {
    "code": "46.03",
    "title": "Electrical and Power Transmission Installers",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0301",
        "code": "46.0301",
        "title": "Electrical and Power Transmission Installation/Installer, General"
      },
      {
        "id": "cip-46-0302",
        "code": "46.0302",
        "title": "Electrician"
      },
      {
        "id": "cip-46-0303",
        "code": "46.0303",
        "title": "Lineworker"
      },
      {
        "id": "cip-46-0399",
        "code": "46.0399",
        "title": "Electrical and Power Transmission Installers, Other"
      }
    ]
  },
  {
    "code": "46.04",
    "title": "Building/Construction Finishing, Management, and Inspection",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0401",
        "code": "46.0401",
        "title": "Building/Property Maintenance and Management"
      },
      {
        "id": "cip-46-0402",
        "code": "46.0402",
        "title": "Concrete Finishing/Concrete Finisher"
      },
      {
        "id": "cip-46-0403",
        "code": "46.0403",
        "title": "Building/Home/Construction Inspection/Inspector"
      },
      {
        "id": "cip-46-0404",
        "code": "46.0404",
        "title": "Drywall Installation/Drywaller"
      },
      {
        "id": "cip-46-0406",
        "code": "46.0406",
        "title": "Glazier"
      },
      {
        "id": "cip-46-0408",
        "code": "46.0408",
        "title": "Painting/Painter and Wall Coverer"
      },
      {
        "id": "cip-46-0410",
        "code": "46.0410",
        "title": "Roofer"
      },
      {
        "id": "cip-46-0411",
        "code": "46.0411",
        "title": "Metal Building Assembly/Assembler"
      },
      {
        "id": "cip-46-0412",
        "code": "46.0412",
        "title": "Building/Construction Site Management/Manager"
      },
      {
        "id": "cip-46-0413",
        "code": "46.0413",
        "title": "Carpet, Floor, and Tile Worker"
      },
      {
        "id": "cip-46-0414",
        "code": "46.0414",
        "title": "Insulator"
      },
      {
        "id": "cip-46-0415",
        "code": "46.0415",
        "title": "Building Construction Technology"
      },
      {
        "id": "cip-46-0499",
        "code": "46.0499",
        "title": "Building/Construction Finishing, Management, and Inspection, Other"
      }
    ]
  },
  {
    "code": "46.05",
    "title": "Plumbing and Related Water Supply Services",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-0502",
        "code": "46.0502",
        "title": "Pipefitting/Pipefitter and Sprinkler Fitter"
      },
      {
        "id": "cip-46-0503",
        "code": "46.0503",
        "title": "Plumbing Technology/Plumber"
      },
      {
        "id": "cip-46-0504",
        "code": "46.0504",
        "title": "Well Drilling/Driller"
      },
      {
        "id": "cip-46-0505",
        "code": "46.0505",
        "title": "Blasting/Blaster"
      },
      {
        "id": "cip-46-0599",
        "code": "46.0599",
        "title": "Plumbing and Related Water Supply Services, Other"
      }
    ]
  },
  {
    "code": "46.99",
    "title": "Construction Trades, Other",
    "parentCode": "46",
    "parentTitle": "CONSTRUCTION TRADES",
    "majors": [
      {
        "id": "cip-46-9999",
        "code": "46.9999",
        "title": "Construction Trades, Other"
      }
    ]
  },
  {
    "code": "47.00",
    "title": "Mechanics and Repairers, General",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0000",
        "code": "47.0000",
        "title": "Mechanics and Repairers, General"
      }
    ]
  },
  {
    "code": "47.01",
    "title": "Electrical/Electronics Maintenance and Repair Technology",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0101",
        "code": "47.0101",
        "title": "Electrical/Electronics Equipment Installation and Repair, General"
      },
      {
        "id": "cip-47-0102",
        "code": "47.0102",
        "title": "Business Machine Repair"
      },
      {
        "id": "cip-47-0103",
        "code": "47.0103",
        "title": "Communications Systems Installation and Repair Technology"
      },
      {
        "id": "cip-47-0104",
        "code": "47.0104",
        "title": "Computer Installation and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0105",
        "code": "47.0105",
        "title": "Industrial Electronics Technology/Technician"
      },
      {
        "id": "cip-47-0106",
        "code": "47.0106",
        "title": "Appliance Installation and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0110",
        "code": "47.0110",
        "title": "Security System Installation, Repair, and Inspection Technology/Technician"
      },
      {
        "id": "cip-47-0199",
        "code": "47.0199",
        "title": "Electrical/Electronics Maintenance and Repair Technology, Other"
      }
    ]
  },
  {
    "code": "47.02",
    "title": "Heating, Air Conditioning, Ventilation and Refrigeration Maintenance Technology/Technician (HAC, HACR, HVAC, HVACR)",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0201",
        "code": "47.0201",
        "title": "Heating, Air Conditioning, Ventilation and Refrigeration Maintenance Technology/Technician (HAC, HACR, HVAC, HVACR)"
      }
    ]
  },
  {
    "code": "47.03",
    "title": "Heavy/Industrial Equipment Maintenance Technologies",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0302",
        "code": "47.0302",
        "title": "Heavy Equipment Maintenance Technology/Technician"
      },
      {
        "id": "cip-47-0303",
        "code": "47.0303",
        "title": "Industrial Mechanics and Maintenance Technology"
      },
      {
        "id": "cip-47-0399",
        "code": "47.0399",
        "title": "Heavy/Industrial Equipment Maintenance Technologies, Other"
      }
    ]
  },
  {
    "code": "47.04",
    "title": "Precision Systems Maintenance and Repair Technologies",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0402",
        "code": "47.0402",
        "title": "Gunsmithing/Gunsmith"
      },
      {
        "id": "cip-47-0403",
        "code": "47.0403",
        "title": "Locksmithing and Safe Repair"
      },
      {
        "id": "cip-47-0404",
        "code": "47.0404",
        "title": "Musical Instrument Fabrication and Repair"
      },
      {
        "id": "cip-47-0408",
        "code": "47.0408",
        "title": "Watchmaking and Jewelrymaking"
      },
      {
        "id": "cip-47-0409",
        "code": "47.0409",
        "title": "Parts and Warehousing Operations and Maintenance Technology/Technician"
      },
      {
        "id": "cip-47-0499",
        "code": "47.0499",
        "title": "Precision Systems Maintenance and Repair Technologies, Other"
      }
    ]
  },
  {
    "code": "47.06",
    "title": "Vehicle Maintenance and Repair Technologies",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-0600",
        "code": "47.0600",
        "title": "Vehicle Maintenance and Repair Technologies, General"
      },
      {
        "id": "cip-47-0603",
        "code": "47.0603",
        "title": "Autobody/Collision and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0604",
        "code": "47.0604",
        "title": "Automobile/Automotive Mechanics Technology/Technician"
      },
      {
        "id": "cip-47-0605",
        "code": "47.0605",
        "title": "Diesel Mechanics Technology/Technician"
      },
      {
        "id": "cip-47-0606",
        "code": "47.0606",
        "title": "Small Engine Mechanics and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0607",
        "code": "47.0607",
        "title": "Airframe Mechanics and Aircraft Maintenance Technology/Technician"
      },
      {
        "id": "cip-47-0608",
        "code": "47.0608",
        "title": "Aircraft Powerplant Technology/Technician"
      },
      {
        "id": "cip-47-0609",
        "code": "47.0609",
        "title": "Avionics Maintenance Technology/Technician"
      },
      {
        "id": "cip-47-0610",
        "code": "47.0610",
        "title": "Bicycle Mechanics and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0611",
        "code": "47.0611",
        "title": "Motorcycle Maintenance and Repair Technology/Technician"
      },
      {
        "id": "cip-47-0612",
        "code": "47.0612",
        "title": "Vehicle Emissions Inspection and Maintenance Technology/Technician"
      },
      {
        "id": "cip-47-0613",
        "code": "47.0613",
        "title": "Medium/Heavy Vehicle and Truck Technology/Technician"
      },
      {
        "id": "cip-47-0614",
        "code": "47.0614",
        "title": "Alternative Fuel Vehicle Technology/Technician"
      },
      {
        "id": "cip-47-0615",
        "code": "47.0615",
        "title": "Engine Machinist"
      },
      {
        "id": "cip-47-0616",
        "code": "47.0616",
        "title": "Marine Maintenance/Fitter and Ship Repair Technology/Technician"
      },
      {
        "id": "cip-47-0617",
        "code": "47.0617",
        "title": "High Performance and Custom Engine Technician/Mechanic"
      },
      {
        "id": "cip-47-0618",
        "code": "47.0618",
        "title": "Recreation Vehicle (RV) Service Technician"
      },
      {
        "id": "cip-47-0699",
        "code": "47.0699",
        "title": "Vehicle Maintenance and Repair Technologies, Other"
      }
    ]
  },
  {
    "code": "47.99",
    "title": "Mechanic and Repair Technologies/Technicians, Other",
    "parentCode": "47",
    "parentTitle": "MECHANIC AND REPAIR TECHNOLOGIES/TECHNICIANS",
    "majors": [
      {
        "id": "cip-47-9999",
        "code": "47.9999",
        "title": "Mechanic and Repair Technologies/Technicians, Other"
      }
    ]
  },
  {
    "code": "48.00",
    "title": "Precision Production Trades, General",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-0000",
        "code": "48.0000",
        "title": "Precision Production Trades, General"
      }
    ]
  },
  {
    "code": "48.03",
    "title": "Leatherworking and Upholstery",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-0303",
        "code": "48.0303",
        "title": "Upholstery/Upholsterer"
      },
      {
        "id": "cip-48-0304",
        "code": "48.0304",
        "title": "Shoe, Boot and Leather Repair"
      },
      {
        "id": "cip-48-0399",
        "code": "48.0399",
        "title": "Leatherworking and Upholstery, Other"
      }
    ]
  },
  {
    "code": "48.05",
    "title": "Precision Metal Working",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-0501",
        "code": "48.0501",
        "title": "Machine Tool Technology/Machinist"
      },
      {
        "id": "cip-48-0503",
        "code": "48.0503",
        "title": "Machine Shop Technology/Assistant"
      },
      {
        "id": "cip-48-0506",
        "code": "48.0506",
        "title": "Sheet Metal Technology/Sheetworking"
      },
      {
        "id": "cip-48-0507",
        "code": "48.0507",
        "title": "Tool and Die Technology/Technician"
      },
      {
        "id": "cip-48-0508",
        "code": "48.0508",
        "title": "Welding Technology/Welder"
      },
      {
        "id": "cip-48-0509",
        "code": "48.0509",
        "title": "Ironworking/Ironworker"
      },
      {
        "id": "cip-48-0510",
        "code": "48.0510",
        "title": "Computer Numerically Controlled (CNC) Machinist Technology/CNC Machinist"
      },
      {
        "id": "cip-48-0511",
        "code": "48.0511",
        "title": "Metal Fabricator"
      },
      {
        "id": "cip-48-0599",
        "code": "48.0599",
        "title": "Precision Metal Working, Other"
      }
    ]
  },
  {
    "code": "48.07",
    "title": "Woodworking",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-0701",
        "code": "48.0701",
        "title": "Woodworking, General"
      },
      {
        "id": "cip-48-0702",
        "code": "48.0702",
        "title": "Furniture Design and Manufacturing"
      },
      {
        "id": "cip-48-0703",
        "code": "48.0703",
        "title": "Cabinetmaking and Millwork/Millwright"
      },
      {
        "id": "cip-48-0799",
        "code": "48.0799",
        "title": "Woodworking, Other"
      }
    ]
  },
  {
    "code": "48.08",
    "title": "Boilermaking/Boilermaker",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-0801",
        "code": "48.0801",
        "title": "Boilermaking/Boilermaker"
      }
    ]
  },
  {
    "code": "48.99",
    "title": "Precision Production, Other",
    "parentCode": "48",
    "parentTitle": "PRECISION PRODUCTION",
    "majors": [
      {
        "id": "cip-48-9999",
        "code": "48.9999",
        "title": "Precision Production, Other"
      }
    ]
  },
  {
    "code": "49.01",
    "title": "Air Transportation",
    "parentCode": "49",
    "parentTitle": "TRANSPORTATION AND MATERIALS MOVING",
    "majors": [
      {
        "id": "cip-49-0101",
        "code": "49.0101",
        "title": "Aeronautics/Aviation/Aerospace Science and Technology, General"
      },
      {
        "id": "cip-49-0102",
        "code": "49.0102",
        "title": "Airline/Commercial/Professional Pilot and Flight Crew"
      },
      {
        "id": "cip-49-0104",
        "code": "49.0104",
        "title": "Aviation/Airway Management and Operations"
      },
      {
        "id": "cip-49-0105",
        "code": "49.0105",
        "title": "Air Traffic Controller"
      },
      {
        "id": "cip-49-0106",
        "code": "49.0106",
        "title": "Airline Flight Attendant"
      },
      {
        "id": "cip-49-0108",
        "code": "49.0108",
        "title": "Flight Instructor"
      },
      {
        "id": "cip-49-0199",
        "code": "49.0199",
        "title": "Air Transportation, Other"
      }
    ]
  },
  {
    "code": "49.02",
    "title": "Ground Transportation",
    "parentCode": "49",
    "parentTitle": "TRANSPORTATION AND MATERIALS MOVING",
    "majors": [
      {
        "id": "cip-49-0202",
        "code": "49.0202",
        "title": "Construction/Heavy Equipment/Earthmoving Equipment Operation"
      },
      {
        "id": "cip-49-0205",
        "code": "49.0205",
        "title": "Truck and Bus Driver/Commercial Vehicle Operation"
      },
      {
        "id": "cip-49-0206",
        "code": "49.0206",
        "title": "Mobil Crane Operation/Operator"
      },
      {
        "id": "cip-49-0207",
        "code": "49.0207",
        "title": "Flagging and Traffic Control"
      },
      {
        "id": "cip-49-0208",
        "code": "49.0208",
        "title": "Railroad and Railway Transportation"
      },
      {
        "id": "cip-49-0299",
        "code": "49.0299",
        "title": "Ground Transportation, Other"
      }
    ]
  },
  {
    "code": "49.03",
    "title": "Marine Transportation",
    "parentCode": "49",
    "parentTitle": "TRANSPORTATION AND MATERIALS MOVING",
    "majors": [
      {
        "id": "cip-49-0303",
        "code": "49.0303",
        "title": "Commercial Fishing"
      },
      {
        "id": "cip-49-0304",
        "code": "49.0304",
        "title": "Diver, Professional and Instructor"
      },
      {
        "id": "cip-49-0309",
        "code": "49.0309",
        "title": "Marine Science/Merchant Marine Officer"
      },
      {
        "id": "cip-49-0399",
        "code": "49.0399",
        "title": "Marine Transportation, Other"
      }
    ]
  },
  {
    "code": "49.99",
    "title": "Transportation and Materials Moving, Other",
    "parentCode": "49",
    "parentTitle": "TRANSPORTATION AND MATERIALS MOVING",
    "majors": [
      {
        "id": "cip-49-9999",
        "code": "49.9999",
        "title": "Transportation and Materials Moving, Other"
      }
    ]
  },
  {
    "code": "50.01",
    "title": "Visual and Performing Arts, General",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0101",
        "code": "50.0101",
        "title": "Visual and Performing Arts, General"
      },
      {
        "id": "cip-50-0102",
        "code": "50.0102",
        "title": "Digital Arts"
      }
    ]
  },
  {
    "code": "50.02",
    "title": "Crafts/Craft Design, Folk Art and Artisanry",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0201",
        "code": "50.0201",
        "title": "Crafts/Craft Design, Folk Art and Artisanry"
      }
    ]
  },
  {
    "code": "50.03",
    "title": "Dance",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0301",
        "code": "50.0301",
        "title": "Dance, General"
      },
      {
        "id": "cip-50-0302",
        "code": "50.0302",
        "title": "Ballet"
      },
      {
        "id": "cip-50-0399",
        "code": "50.0399",
        "title": "Dance, Other"
      }
    ]
  },
  {
    "code": "50.04",
    "title": "Design and Applied Arts",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0401",
        "code": "50.0401",
        "title": "Design and Visual Communications, General"
      },
      {
        "id": "cip-50-0402",
        "code": "50.0402",
        "title": "Commercial and Advertising Art"
      },
      {
        "id": "cip-50-0404",
        "code": "50.0404",
        "title": "Industrial Design"
      },
      {
        "id": "cip-50-0406",
        "code": "50.0406",
        "title": "Commercial Photography"
      },
      {
        "id": "cip-50-0407",
        "code": "50.0407",
        "title": "Fashion/Apparel Design"
      },
      {
        "id": "cip-50-0408",
        "code": "50.0408",
        "title": "Interior Design"
      },
      {
        "id": "cip-50-0409",
        "code": "50.0409",
        "title": "Graphic Design"
      },
      {
        "id": "cip-50-0410",
        "code": "50.0410",
        "title": "Illustration"
      },
      {
        "id": "cip-50-0411",
        "code": "50.0411",
        "title": "Game and Interactive Media Design"
      },
      {
        "id": "cip-50-0499",
        "code": "50.0499",
        "title": "Design and Applied Arts, Other"
      }
    ]
  },
  {
    "code": "50.05",
    "title": "Drama/Theatre Arts and Stagecraft",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0501",
        "code": "50.0501",
        "title": "Drama and Dramatics/Theatre Arts, General"
      },
      {
        "id": "cip-50-0502",
        "code": "50.0502",
        "title": "Technical Theatre/Theatre Design and Technology"
      },
      {
        "id": "cip-50-0504",
        "code": "50.0504",
        "title": "Playwriting and Screenwriting"
      },
      {
        "id": "cip-50-0505",
        "code": "50.0505",
        "title": "Theatre Literature, History and Criticism"
      },
      {
        "id": "cip-50-0506",
        "code": "50.0506",
        "title": "Acting"
      },
      {
        "id": "cip-50-0507",
        "code": "50.0507",
        "title": "Directing and Theatrical Production"
      },
      {
        "id": "cip-50-0509",
        "code": "50.0509",
        "title": "Musical Theatre"
      },
      {
        "id": "cip-50-0510",
        "code": "50.0510",
        "title": "Costume Design"
      },
      {
        "id": "cip-50-0599",
        "code": "50.0599",
        "title": "Dramatic/Theatre Arts and Stagecraft, Other"
      }
    ]
  },
  {
    "code": "50.06",
    "title": "Film/Video and Photographic Arts",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0601",
        "code": "50.0601",
        "title": "Film/Cinema Studies"
      },
      {
        "id": "cip-50-0602",
        "code": "50.0602",
        "title": "Cinematography and Film/Video Production"
      },
      {
        "id": "cip-50-0605",
        "code": "50.0605",
        "title": "Photography"
      },
      {
        "id": "cip-50-0607",
        "code": "50.0607",
        "title": "Documentary Production"
      },
      {
        "id": "cip-50-0699",
        "code": "50.0699",
        "title": "Film/Video and Photographic Arts, Other"
      }
    ]
  },
  {
    "code": "50.07",
    "title": "Fine and Studio Art",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0701",
        "code": "50.0701",
        "title": "Art/Art Studies, General"
      },
      {
        "id": "cip-50-0702",
        "code": "50.0702",
        "title": "Fine/Studio Arts, General"
      },
      {
        "id": "cip-50-0703",
        "code": "50.0703",
        "title": "Art History, Criticism and Conservation"
      },
      {
        "id": "cip-50-0705",
        "code": "50.0705",
        "title": "Drawing"
      },
      {
        "id": "cip-50-0706",
        "code": "50.0706",
        "title": "Intermedia/Multimedia"
      },
      {
        "id": "cip-50-0708",
        "code": "50.0708",
        "title": "Painting"
      },
      {
        "id": "cip-50-0709",
        "code": "50.0709",
        "title": "Sculpture"
      },
      {
        "id": "cip-50-0710",
        "code": "50.0710",
        "title": "Printmaking"
      },
      {
        "id": "cip-50-0711",
        "code": "50.0711",
        "title": "Ceramic Arts and Ceramics"
      },
      {
        "id": "cip-50-0712",
        "code": "50.0712",
        "title": "Fiber, Textile and Weaving Arts"
      },
      {
        "id": "cip-50-0713",
        "code": "50.0713",
        "title": "Metal and Jewelry Arts"
      },
      {
        "id": "cip-50-0799",
        "code": "50.0799",
        "title": "Fine Arts and Art Studies, Other"
      }
    ]
  },
  {
    "code": "50.09",
    "title": "Music",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-0901",
        "code": "50.0901",
        "title": "Music, General"
      },
      {
        "id": "cip-50-0902",
        "code": "50.0902",
        "title": "Music History, Literature, and Theory"
      },
      {
        "id": "cip-50-0903",
        "code": "50.0903",
        "title": "Music Performance, General"
      },
      {
        "id": "cip-50-0904",
        "code": "50.0904",
        "title": "Music Theory and Composition"
      },
      {
        "id": "cip-50-0905",
        "code": "50.0905",
        "title": "Musicology and Ethnomusicology"
      },
      {
        "id": "cip-50-0906",
        "code": "50.0906",
        "title": "Conducting"
      },
      {
        "id": "cip-50-0907",
        "code": "50.0907",
        "title": "Piano and Organ"
      },
      {
        "id": "cip-50-0908",
        "code": "50.0908",
        "title": "Voice and Opera"
      },
      {
        "id": "cip-50-0910",
        "code": "50.0910",
        "title": "Jazz/Jazz Studies"
      },
      {
        "id": "cip-50-0911",
        "code": "50.0911",
        "title": "Violin, Viola, Guitar and Other Stringed Instruments"
      },
      {
        "id": "cip-50-0912",
        "code": "50.0912",
        "title": "Music Pedagogy"
      },
      {
        "id": "cip-50-0913",
        "code": "50.0913",
        "title": "Music Technology"
      },
      {
        "id": "cip-50-0914",
        "code": "50.0914",
        "title": "Brass Instruments"
      },
      {
        "id": "cip-50-0915",
        "code": "50.0915",
        "title": "Woodwind Instruments"
      },
      {
        "id": "cip-50-0916",
        "code": "50.0916",
        "title": "Percussion Instruments"
      },
      {
        "id": "cip-50-0999",
        "code": "50.0999",
        "title": "Music, Other"
      }
    ]
  },
  {
    "code": "50.10",
    "title": "Arts, Entertainment,and Media Management",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-1001",
        "code": "50.1001",
        "title": "Arts, Entertainment,and Media Management, General"
      },
      {
        "id": "cip-50-1002",
        "code": "50.1002",
        "title": "Arts Management"
      },
      {
        "id": "cip-50-1003",
        "code": "50.1003",
        "title": "Music Management and Merchandising"
      },
      {
        "id": "cip-50-1004",
        "code": "50.1004",
        "title": "Theatre/Theatre Arts Management"
      },
      {
        "id": "cip-50-1099",
        "code": "50.1099",
        "title": "Arts, Entertainment, and Media Management, Other"
      }
    ]
  },
  {
    "code": "50.99",
    "title": "Visual and Performing Arts, Other",
    "parentCode": "50",
    "parentTitle": "VISUAL AND PERFORMING ARTS",
    "majors": [
      {
        "id": "cip-50-9999",
        "code": "50.9999",
        "title": "Visual and Performing Arts, Other"
      }
    ]
  },
  {
    "code": "51.00",
    "title": "Health Services/Allied Health/Health Sciences, General",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0000",
        "code": "51.0000",
        "title": "Health Services/Allied Health/Health Sciences, General"
      },
      {
        "id": "cip-51-0001",
        "code": "51.0001",
        "title": "Health and Wellness, General"
      }
    ]
  },
  {
    "code": "51.01",
    "title": "Chiropractic (DC)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0101",
        "code": "51.0101",
        "title": "Chiropractic (DC)"
      }
    ]
  },
  {
    "code": "51.02",
    "title": "Communication Disorders Sciences and Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0201",
        "code": "51.0201",
        "title": "Communication Disorders, General"
      },
      {
        "id": "cip-51-0202",
        "code": "51.0202",
        "title": "Audiology/Audiologist and Hearing Sciences"
      },
      {
        "id": "cip-51-0203",
        "code": "51.0203",
        "title": "Speech-Language Pathology/Pathologist"
      },
      {
        "id": "cip-51-0204",
        "code": "51.0204",
        "title": "Audiology/Audiologist and Speech-Language Pathology/Pathologist"
      },
      {
        "id": "cip-51-0299",
        "code": "51.0299",
        "title": "Communication Disorders Sciences and Services, Other"
      }
    ]
  },
  {
    "code": "51.04",
    "title": "Dentistry (DDS, DMD)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0401",
        "code": "51.0401",
        "title": "Dentistry (DDS, DMD)"
      }
    ]
  },
  {
    "code": "51.05",
    "title": "Advanced/Graduate Dentistry and Oral Sciences (Cert., MS, PhD)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0501",
        "code": "51.0501",
        "title": "Dental Clinical Sciences, General (MS, PhD)"
      },
      {
        "id": "cip-51-0502",
        "code": "51.0502",
        "title": "Advanced General Dentistry (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0503",
        "code": "51.0503",
        "title": "Oral Biology and Oral Pathology (MS, PhD)"
      },
      {
        "id": "cip-51-0504",
        "code": "51.0504",
        "title": "Dental Public Health and Education (Cert., MS/MPH, PhD/DPH)"
      },
      {
        "id": "cip-51-0505",
        "code": "51.0505",
        "title": "Dental Materials (MS, PhD)"
      },
      {
        "id": "cip-51-0506",
        "code": "51.0506",
        "title": "Endodontics/Endodontology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0507",
        "code": "51.0507",
        "title": "Oral/Maxillofacial Surgery (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0508",
        "code": "51.0508",
        "title": "Orthodontics/Orthodontology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0509",
        "code": "51.0509",
        "title": "Pediatric Dentistry/Pedodontics (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0510",
        "code": "51.0510",
        "title": "Periodontics/Periodontology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0511",
        "code": "51.0511",
        "title": "Prosthodontics/Prosthodontology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-0599",
        "code": "51.0599",
        "title": "Advanced/Graduate Dentistry and Oral Sciences, Other"
      }
    ]
  },
  {
    "code": "51.06",
    "title": "Dental Support Services and Allied Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0601",
        "code": "51.0601",
        "title": "Dental Assisting/Assistant"
      },
      {
        "id": "cip-51-0602",
        "code": "51.0602",
        "title": "Dental Hygiene/Hygienist"
      },
      {
        "id": "cip-51-0603",
        "code": "51.0603",
        "title": "Dental Laboratory Technology/Technician"
      },
      {
        "id": "cip-51-0699",
        "code": "51.0699",
        "title": "Dental Services and Allied Professions, Other"
      }
    ]
  },
  {
    "code": "51.07",
    "title": "Health and Medical Administrative Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0701",
        "code": "51.0701",
        "title": "Health/Health Care Administration/Management"
      },
      {
        "id": "cip-51-0702",
        "code": "51.0702",
        "title": "Hospital and Health Care Facilities Administration/Management"
      },
      {
        "id": "cip-51-0703",
        "code": "51.0703",
        "title": "Health Unit Coordinator/Ward Clerk"
      },
      {
        "id": "cip-51-0704",
        "code": "51.0704",
        "title": "Health Unit Manager/Ward Supervisor"
      },
      {
        "id": "cip-51-0705",
        "code": "51.0705",
        "title": "Medical Office Management/Administration"
      },
      {
        "id": "cip-51-0706",
        "code": "51.0706",
        "title": "Health Information/Medical Records Administration/Administrator"
      },
      {
        "id": "cip-51-0707",
        "code": "51.0707",
        "title": "Health Information/Medical Records Technology/Technician"
      },
      {
        "id": "cip-51-0708",
        "code": "51.0708",
        "title": "Medical Transcription/Transcriptionist"
      },
      {
        "id": "cip-51-0709",
        "code": "51.0709",
        "title": "Medical Office Computer Specialist/Assistant"
      },
      {
        "id": "cip-51-0710",
        "code": "51.0710",
        "title": "Medical Office Assistant/Specialist"
      },
      {
        "id": "cip-51-0711",
        "code": "51.0711",
        "title": "Medical/Health Management and Clinical Assistant/Specialist"
      },
      {
        "id": "cip-51-0712",
        "code": "51.0712",
        "title": "Medical Reception/Receptionist"
      },
      {
        "id": "cip-51-0713",
        "code": "51.0713",
        "title": "Medical Insurance Coding Specialist/Coder"
      },
      {
        "id": "cip-51-0714",
        "code": "51.0714",
        "title": "Medical Insurance Specialist/Medical Biller"
      },
      {
        "id": "cip-51-0715",
        "code": "51.0715",
        "title": "Health/Medical Claims Examiner"
      },
      {
        "id": "cip-51-0716",
        "code": "51.0716",
        "title": "Medical Administrative/Executive Assistant and Medical Secretary"
      },
      {
        "id": "cip-51-0717",
        "code": "51.0717",
        "title": "Medical Staff Services Technology/Technician"
      },
      {
        "id": "cip-51-0718",
        "code": "51.0718",
        "title": "Long Term Care Administration/Management"
      },
      {
        "id": "cip-51-0719",
        "code": "51.0719",
        "title": "Clinical Research Coordinator"
      },
      {
        "id": "cip-51-0799",
        "code": "51.0799",
        "title": "Health and Medical Administrative Services, Other"
      }
    ]
  },
  {
    "code": "51.08",
    "title": "Allied Health and Medical Assisting Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0801",
        "code": "51.0801",
        "title": "Medical/Clinical Assistant"
      },
      {
        "id": "cip-51-0802",
        "code": "51.0802",
        "title": "Clinical/Medical Laboratory Assistant"
      },
      {
        "id": "cip-51-0803",
        "code": "51.0803",
        "title": "Occupational Therapist Assistant"
      },
      {
        "id": "cip-51-0805",
        "code": "51.0805",
        "title": "Pharmacy Technician/Assistant"
      },
      {
        "id": "cip-51-0806",
        "code": "51.0806",
        "title": "Physical Therapist Assistant"
      },
      {
        "id": "cip-51-0808",
        "code": "51.0808",
        "title": "Veterinary/Animal Health Technology/Technician and Veterinary Assistant"
      },
      {
        "id": "cip-51-0809",
        "code": "51.0809",
        "title": "Anesthesiologist Assistant"
      },
      {
        "id": "cip-51-0810",
        "code": "51.0810",
        "title": "Emergency Care Attendant (EMT Ambulance)"
      },
      {
        "id": "cip-51-0811",
        "code": "51.0811",
        "title": "Pathology/Pathologist Assistant"
      },
      {
        "id": "cip-51-0812",
        "code": "51.0812",
        "title": "Respiratory Therapy Technician/Assistant"
      },
      {
        "id": "cip-51-0813",
        "code": "51.0813",
        "title": "Chiropractic Assistant/Technician"
      },
      {
        "id": "cip-51-0814",
        "code": "51.0814",
        "title": "Radiologist Assistant"
      },
      {
        "id": "cip-51-0815",
        "code": "51.0815",
        "title": "Lactation Consultant"
      },
      {
        "id": "cip-51-0816",
        "code": "51.0816",
        "title": "Speech-Language Pathology Assistant"
      },
      {
        "id": "cip-51-0899",
        "code": "51.0899",
        "title": "Allied Health and Medical Assisting Services, Other"
      }
    ]
  },
  {
    "code": "51.09",
    "title": "Allied Health Diagnostic, Intervention, and Treatment Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-0901",
        "code": "51.0901",
        "title": "Cardiovascular Technology/Technologist"
      },
      {
        "id": "cip-51-0902",
        "code": "51.0902",
        "title": "Electrocardiograph Technology/Technician"
      },
      {
        "id": "cip-51-0903",
        "code": "51.0903",
        "title": "Electroneurodiagnostic/Electroencephalographic Technology/Technologist"
      },
      {
        "id": "cip-51-0904",
        "code": "51.0904",
        "title": "Emergency Medical Technology/Technician (EMT Paramedic)"
      },
      {
        "id": "cip-51-0905",
        "code": "51.0905",
        "title": "Nuclear Medical Technology/Technologist"
      },
      {
        "id": "cip-51-0906",
        "code": "51.0906",
        "title": "Perfusion Technology/Perfusionist"
      },
      {
        "id": "cip-51-0907",
        "code": "51.0907",
        "title": "Medical Radiologic Technology/Science - Radiation Therapist"
      },
      {
        "id": "cip-51-0908",
        "code": "51.0908",
        "title": "Respiratory Care Therapy/Therapist"
      },
      {
        "id": "cip-51-0909",
        "code": "51.0909",
        "title": "Surgical Technology/Technologist"
      },
      {
        "id": "cip-51-0910",
        "code": "51.0910",
        "title": "Diagnostic Medical Sonography/Sonographer and Ultrasound Technician"
      },
      {
        "id": "cip-51-0911",
        "code": "51.0911",
        "title": "Radiologic Technology/Science - Radiographer"
      },
      {
        "id": "cip-51-0912",
        "code": "51.0912",
        "title": "Physician Assistant"
      },
      {
        "id": "cip-51-0913",
        "code": "51.0913",
        "title": "Athletic Training/Trainer"
      },
      {
        "id": "cip-51-0914",
        "code": "51.0914",
        "title": "Gene/Genetic Therapy"
      },
      {
        "id": "cip-51-0915",
        "code": "51.0915",
        "title": "Cardiopulmonary Technology/Technologist"
      },
      {
        "id": "cip-51-0916",
        "code": "51.0916",
        "title": "Radiation Protection/Health Physics Technician"
      },
      {
        "id": "cip-51-0917",
        "code": "51.0917",
        "title": "Polysomnography"
      },
      {
        "id": "cip-51-0918",
        "code": "51.0918",
        "title": "Hearing Instrument Specialist"
      },
      {
        "id": "cip-51-0919",
        "code": "51.0919",
        "title": "Mammography Technician/Technology"
      },
      {
        "id": "cip-51-0920",
        "code": "51.0920",
        "title": "Magnetic Resonance Imaging (MRI) Technology/Technician"
      },
      {
        "id": "cip-51-0999",
        "code": "51.0999",
        "title": "Allied Health Diagnostic, Intervention, and Treatment Professions, Other"
      }
    ]
  },
  {
    "code": "51.10",
    "title": "Clinical/Medical Laboratory Science and Allied Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1001",
        "code": "51.1001",
        "title": "Blood Bank Technology Specialist"
      },
      {
        "id": "cip-51-1002",
        "code": "51.1002",
        "title": "Cytotechnology/Cytotechnologist"
      },
      {
        "id": "cip-51-1003",
        "code": "51.1003",
        "title": "Hematology Technology/Technician"
      },
      {
        "id": "cip-51-1004",
        "code": "51.1004",
        "title": "Clinical/Medical Laboratory Technician"
      },
      {
        "id": "cip-51-1005",
        "code": "51.1005",
        "title": "Clinical Laboratory Science/Medical Technology/Technologist"
      },
      {
        "id": "cip-51-1006",
        "code": "51.1006",
        "title": "Ophthalmic Laboratory Technology/Technician"
      },
      {
        "id": "cip-51-1007",
        "code": "51.1007",
        "title": "Histologic Technology/Histotechnologist"
      },
      {
        "id": "cip-51-1008",
        "code": "51.1008",
        "title": "Histologic Technician"
      },
      {
        "id": "cip-51-1009",
        "code": "51.1009",
        "title": "Phlebotomy/Phlebotomist"
      },
      {
        "id": "cip-51-1010",
        "code": "51.1010",
        "title": "Cytogenetics/Genetics/Clinical Genetics Technology/Technologist"
      },
      {
        "id": "cip-51-1011",
        "code": "51.1011",
        "title": "Renal/Dialysis Technologist/Technician"
      },
      {
        "id": "cip-51-1012",
        "code": "51.1012",
        "title": "Sterile Processing Technology/Technician"
      },
      {
        "id": "cip-51-1099",
        "code": "51.1099",
        "title": "Clinical/Medical Laboratory Science and Allied Professions, Other"
      }
    ]
  },
  {
    "code": "51.11",
    "title": "Health/Medical Preparatory Programs",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1101",
        "code": "51.1101",
        "title": "Pre-Dentistry Studies"
      },
      {
        "id": "cip-51-1102",
        "code": "51.1102",
        "title": "Pre-Medicine/Pre-Medical Studies"
      },
      {
        "id": "cip-51-1103",
        "code": "51.1103",
        "title": "Pre-Pharmacy Studies"
      },
      {
        "id": "cip-51-1104",
        "code": "51.1104",
        "title": "Pre-Veterinary Studies"
      },
      {
        "id": "cip-51-1105",
        "code": "51.1105",
        "title": "Pre-Nursing Studies"
      },
      {
        "id": "cip-51-1106",
        "code": "51.1106",
        "title": "Pre-Chiropractic Studies"
      },
      {
        "id": "cip-51-1107",
        "code": "51.1107",
        "title": "Pre-Occupational Therapy Studies"
      },
      {
        "id": "cip-51-1108",
        "code": "51.1108",
        "title": "Pre-Optometry Studies"
      },
      {
        "id": "cip-51-1109",
        "code": "51.1109",
        "title": "Pre-Physical Therapy Studies"
      },
      {
        "id": "cip-51-1199",
        "code": "51.1199",
        "title": "Health/Medical Preparatory Programs, Other"
      }
    ]
  },
  {
    "code": "51.12",
    "title": "Medicine (MD)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1201",
        "code": "51.1201",
        "title": "Medicine (MD)"
      }
    ]
  },
  {
    "code": "51.14",
    "title": "Medical Clinical Sciences/Graduate Medical Studies",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1401",
        "code": "51.1401",
        "title": "Medical Scientist (MS, PhD)"
      }
    ]
  },
  {
    "code": "51.15",
    "title": "Mental and Social Health Services and Allied Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1501",
        "code": "51.1501",
        "title": "Substance Abuse/Addiction Counseling"
      },
      {
        "id": "cip-51-1502",
        "code": "51.1502",
        "title": "Psychiatric/Mental Health Services Technician"
      },
      {
        "id": "cip-51-1503",
        "code": "51.1503",
        "title": "Clinical/Medical Social Work"
      },
      {
        "id": "cip-51-1504",
        "code": "51.1504",
        "title": "Community Health Services/Liaison/Counseling"
      },
      {
        "id": "cip-51-1505",
        "code": "51.1505",
        "title": "Marriage and Family Therapy/Counseling"
      },
      {
        "id": "cip-51-1506",
        "code": "51.1506",
        "title": "Clinical Pastoral Counseling/Patient Counseling"
      },
      {
        "id": "cip-51-1507",
        "code": "51.1507",
        "title": "Psychoanalysis and Psychotherapy"
      },
      {
        "id": "cip-51-1508",
        "code": "51.1508",
        "title": "Mental Health Counseling/Counselor"
      },
      {
        "id": "cip-51-1509",
        "code": "51.1509",
        "title": "Genetic Counseling/Counselor"
      },
      {
        "id": "cip-51-1599",
        "code": "51.1599",
        "title": "Mental and Social Health Services and Allied Professions, Other"
      }
    ]
  },
  {
    "code": "51.17",
    "title": "Optometry (OD)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1701",
        "code": "51.1701",
        "title": "Optometry (OD)"
      }
    ]
  },
  {
    "code": "51.18",
    "title": "Ophthalmic and Optometric Support Services and Allied Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1801",
        "code": "51.1801",
        "title": "Opticianry/Ophthalmic Dispensing Optician"
      },
      {
        "id": "cip-51-1802",
        "code": "51.1802",
        "title": "Optometric Technician/Assistant"
      },
      {
        "id": "cip-51-1803",
        "code": "51.1803",
        "title": "Ophthalmic Technician/Technologist"
      },
      {
        "id": "cip-51-1804",
        "code": "51.1804",
        "title": "Orthoptics/Orthoptist"
      },
      {
        "id": "cip-51-1899",
        "code": "51.1899",
        "title": "Ophthalmic and Optometric Support Services and Allied Professions, Other"
      }
    ]
  },
  {
    "code": "51.19",
    "title": "Osteopathic Medicine/Osteopathy (DO)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-1901",
        "code": "51.1901",
        "title": "Osteopathic Medicine/Osteopathy (DO)"
      }
    ]
  },
  {
    "code": "51.20",
    "title": "Pharmacy, Pharmaceutical Sciences, and Administration",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2001",
        "code": "51.2001",
        "title": "Pharmacy (PharmD [USA], PharmD or BS/BPharm [Canada])"
      },
      {
        "id": "cip-51-2002",
        "code": "51.2002",
        "title": "Pharmacy Administration and Pharmacy Policy and Regulatory Affairs (MS, PhD)"
      },
      {
        "id": "cip-51-2003",
        "code": "51.2003",
        "title": "Pharmaceutics and Drug Design (MS, PhD)"
      },
      {
        "id": "cip-51-2004",
        "code": "51.2004",
        "title": "Medicinal and Pharmaceutical Chemistry (MS, PhD)"
      },
      {
        "id": "cip-51-2005",
        "code": "51.2005",
        "title": "Natural Products Chemistry and Pharmacognosy (MS, PhD)"
      },
      {
        "id": "cip-51-2006",
        "code": "51.2006",
        "title": "Clinical and Industrial Drug Development (MS, PhD)"
      },
      {
        "id": "cip-51-2007",
        "code": "51.2007",
        "title": "Pharmacoeconomics/Pharmaceutical Economics (MS, PhD)"
      },
      {
        "id": "cip-51-2008",
        "code": "51.2008",
        "title": "Clinical, Hospital, and Managed Care Pharmacy (MS, PhD)"
      },
      {
        "id": "cip-51-2009",
        "code": "51.2009",
        "title": "Industrial and Physical Pharmacy and Cosmetic Sciences (MS, PhD)"
      },
      {
        "id": "cip-51-2010",
        "code": "51.2010",
        "title": "Pharmaceutical Sciences"
      },
      {
        "id": "cip-51-2011",
        "code": "51.2011",
        "title": "Pharmaceutical Marketing and Management"
      },
      {
        "id": "cip-51-2099",
        "code": "51.2099",
        "title": "Pharmacy, Pharmaceutical Sciences, and Administration, Other"
      }
    ]
  },
  {
    "code": "51.21",
    "title": "Podiatric Medicine/Podiatry (DPM)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2101",
        "code": "51.2101",
        "title": "Podiatric Medicine/Podiatry (DPM)"
      }
    ]
  },
  {
    "code": "51.22",
    "title": "Public Health",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2201",
        "code": "51.2201",
        "title": "Public Health, General (MPH, DPH)"
      },
      {
        "id": "cip-51-2202",
        "code": "51.2202",
        "title": "Environmental Health"
      },
      {
        "id": "cip-51-2205",
        "code": "51.2205",
        "title": "Health/Medical Physics"
      },
      {
        "id": "cip-51-2206",
        "code": "51.2206",
        "title": "Occupational Health and Industrial Hygiene"
      },
      {
        "id": "cip-51-2207",
        "code": "51.2207",
        "title": "Public Health Education and Promotion"
      },
      {
        "id": "cip-51-2208",
        "code": "51.2208",
        "title": "Community Health and Preventive Medicine"
      },
      {
        "id": "cip-51-2209",
        "code": "51.2209",
        "title": "Maternal and Child Health"
      },
      {
        "id": "cip-51-2210",
        "code": "51.2210",
        "title": "International Public Health/International Health"
      },
      {
        "id": "cip-51-2211",
        "code": "51.2211",
        "title": "Health Services Administration"
      },
      {
        "id": "cip-51-2212",
        "code": "51.2212",
        "title": "Behavioral Aspects of Health"
      },
      {
        "id": "cip-51-2299",
        "code": "51.2299",
        "title": "Public Health, Other"
      }
    ]
  },
  {
    "code": "51.23",
    "title": "Rehabilitation and Therapeutic Professions",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2301",
        "code": "51.2301",
        "title": "Art Therapy/Therapist"
      },
      {
        "id": "cip-51-2302",
        "code": "51.2302",
        "title": "Dance Therapy/Therapist"
      },
      {
        "id": "cip-51-2305",
        "code": "51.2305",
        "title": "Music Therapy/Therapist"
      },
      {
        "id": "cip-51-2306",
        "code": "51.2306",
        "title": "Occupational Therapy/Therapist"
      },
      {
        "id": "cip-51-2307",
        "code": "51.2307",
        "title": "Orthotist/Prosthetist"
      },
      {
        "id": "cip-51-2308",
        "code": "51.2308",
        "title": "Physical Therapy/Therapist"
      },
      {
        "id": "cip-51-2309",
        "code": "51.2309",
        "title": "Therapeutic Recreation/Recreational Therapy"
      },
      {
        "id": "cip-51-2310",
        "code": "51.2310",
        "title": "Vocational Rehabilitation Counseling/Counselor"
      },
      {
        "id": "cip-51-2311",
        "code": "51.2311",
        "title": "Kinesiotherapy/Kinesiotherapist"
      },
      {
        "id": "cip-51-2312",
        "code": "51.2312",
        "title": "Assistive/Augmentative Technology and Rehabiliation Engineering"
      },
      {
        "id": "cip-51-2313",
        "code": "51.2313",
        "title": "Animal-Assisted Therapy"
      },
      {
        "id": "cip-51-2314",
        "code": "51.2314",
        "title": "Rehabilitation Science"
      },
      {
        "id": "cip-51-2399",
        "code": "51.2399",
        "title": "Rehabilitation and Therapeutic Professions, Other"
      }
    ]
  },
  {
    "code": "51.24",
    "title": "Veterinary Medicine (DVM)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2401",
        "code": "51.2401",
        "title": "Veterinary Medicine (DVM)"
      }
    ]
  },
  {
    "code": "51.25",
    "title": "Veterinary Biomedical and Clinical Sciences (Cert., MS, PhD)",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2501",
        "code": "51.2501",
        "title": "Veterinary Sciences/Veterinary Clinical Sciences, General (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2502",
        "code": "51.2502",
        "title": "Veterinary Anatomy (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2503",
        "code": "51.2503",
        "title": "Veterinary Physiology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2504",
        "code": "51.2504",
        "title": "Veterinary Microbiology and Immunobiology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2505",
        "code": "51.2505",
        "title": "Veterinary Pathology and Pathobiology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2506",
        "code": "51.2506",
        "title": "Veterinary Toxicology and Pharmacology (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2507",
        "code": "51.2507",
        "title": "Large Animal/Food Animal and Equine Surgery and Medicine (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2508",
        "code": "51.2508",
        "title": "Small/Companion Animal Surgery and Medicine (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2509",
        "code": "51.2509",
        "title": "Comparative and Laboratory Animal Medicine (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2510",
        "code": "51.2510",
        "title": "Veterinary Preventive Medicine Epidemiology, and Public Health (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2511",
        "code": "51.2511",
        "title": "Veterinary Infectious Diseases (Cert., MS, PhD)"
      },
      {
        "id": "cip-51-2599",
        "code": "51.2599",
        "title": "Veterinary Biomedical and Clinical Sciences, Other (Cert., MS. PhD)"
      }
    ]
  },
  {
    "code": "51.26",
    "title": "Health Aides/Attendants/Orderlies",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2601",
        "code": "51.2601",
        "title": "Health Aide"
      },
      {
        "id": "cip-51-2602",
        "code": "51.2602",
        "title": "Home Health Aide/Home Attendant"
      },
      {
        "id": "cip-51-2603",
        "code": "51.2603",
        "title": "Medication Aide"
      },
      {
        "id": "cip-51-2604",
        "code": "51.2604",
        "title": "Rehabilitation Aide"
      },
      {
        "id": "cip-51-2699",
        "code": "51.2699",
        "title": "Health Aides/Attendants/Orderlies, Other"
      }
    ]
  },
  {
    "code": "51.27",
    "title": "Medical Illustration and Informatics",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-2703",
        "code": "51.2703",
        "title": "Medical Illustration/Medical Illustrator"
      },
      {
        "id": "cip-51-2706",
        "code": "51.2706",
        "title": "Medical Informatics"
      },
      {
        "id": "cip-51-2799",
        "code": "51.2799",
        "title": "Medical Illustration and Informatics, Other"
      }
    ]
  },
  {
    "code": "51.31",
    "title": "Dietetics and Clinical Nutrition Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3101",
        "code": "51.3101",
        "title": "Dietetics/Dietitian (RD)"
      },
      {
        "id": "cip-51-3102",
        "code": "51.3102",
        "title": "Clinical Nutrition/Nutritionist"
      },
      {
        "id": "cip-51-3103",
        "code": "51.3103",
        "title": "Dietetic Technician (DTR)"
      },
      {
        "id": "cip-51-3104",
        "code": "51.3104",
        "title": "Dietitian Assistant"
      },
      {
        "id": "cip-51-3199",
        "code": "51.3199",
        "title": "Dietetics and Clinical Nutrition Services, Other"
      }
    ]
  },
  {
    "code": "51.32",
    "title": "Bioethics/Medical Ethics",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3201",
        "code": "51.3201",
        "title": "Bioethics/Medical Ethics"
      }
    ]
  },
  {
    "code": "51.33",
    "title": "Alternative and Complementary Medicine and Medical Systems",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3300",
        "code": "51.3300",
        "title": "Alternative and Complementary Medicine and Medical Systems, General"
      },
      {
        "id": "cip-51-3301",
        "code": "51.3301",
        "title": "Acupuncture"
      },
      {
        "id": "cip-51-3302",
        "code": "51.3302",
        "title": "Traditional Chinese/Asian Medicine and Chinese Herbology"
      },
      {
        "id": "cip-51-3303",
        "code": "51.3303",
        "title": "Naturopathic Medicine/Naturopathy (ND)"
      },
      {
        "id": "cip-51-3304",
        "code": "51.3304",
        "title": "Homeopathic Medicine/Homeopathy"
      },
      {
        "id": "cip-51-3305",
        "code": "51.3305",
        "title": "Ayurvedic Medicine/Ayurveda"
      },
      {
        "id": "cip-51-3306",
        "code": "51.3306",
        "title": "Holistic Health"
      },
      {
        "id": "cip-51-3399",
        "code": "51.3399",
        "title": "Alternative and Complementary Medicine and Medical Systems, Other"
      }
    ]
  },
  {
    "code": "51.34",
    "title": "Alternative and Complementary Medical Support Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3401",
        "code": "51.3401",
        "title": "Direct Entry Midwifery (LM, CPM)"
      },
      {
        "id": "cip-51-3499",
        "code": "51.3499",
        "title": "Alternative and Complementary Medical Support Services, Other"
      }
    ]
  },
  {
    "code": "51.35",
    "title": "Somatic Bodywork and Related Therapeutic Services",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3501",
        "code": "51.3501",
        "title": "Massage Therapy/Therapeutic Massage"
      },
      {
        "id": "cip-51-3502",
        "code": "51.3502",
        "title": "Asian Bodywork Therapy"
      },
      {
        "id": "cip-51-3503",
        "code": "51.3503",
        "title": "Somatic Bodywork"
      },
      {
        "id": "cip-51-3599",
        "code": "51.3599",
        "title": "Somatic Bodywork and Related Therapeutic Services, Other"
      }
    ]
  },
  {
    "code": "51.36",
    "title": "Movement and Mind-Body Therapies and Education",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3601",
        "code": "51.3601",
        "title": "Movement Therapy and Movement Education"
      },
      {
        "id": "cip-51-3602",
        "code": "51.3602",
        "title": "Yoga Teacher Training/Yoga Therapy"
      },
      {
        "id": "cip-51-3603",
        "code": "51.3603",
        "title": "Hypnotherapy/Hypnotherapist"
      },
      {
        "id": "cip-51-3699",
        "code": "51.3699",
        "title": "Movement and Mind-Body Therapies and Education, Other"
      }
    ]
  },
  {
    "code": "51.37",
    "title": "Energy and Biologically Based Therapies",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3701",
        "code": "51.3701",
        "title": "Aromatherapy"
      },
      {
        "id": "cip-51-3702",
        "code": "51.3702",
        "title": "Herbalism/Herbalist"
      },
      {
        "id": "cip-51-3703",
        "code": "51.3703",
        "title": "Polarity Therapy"
      },
      {
        "id": "cip-51-3704",
        "code": "51.3704",
        "title": "Reiki"
      },
      {
        "id": "cip-51-3799",
        "code": "51.3799",
        "title": "Energy and Biologically Based Therapies, Other"
      }
    ]
  },
  {
    "code": "51.38",
    "title": "Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3801",
        "code": "51.3801",
        "title": "Nursing/Registered Nurse (RN, ASN, BSN, MSN)"
      },
      {
        "id": "cip-51-3802",
        "code": "51.3802",
        "title": "Nursing Administration (MSN, MS, PhD)"
      },
      {
        "id": "cip-51-3803",
        "code": "51.3803",
        "title": "Adult Health Nurse/Nursing"
      },
      {
        "id": "cip-51-3804",
        "code": "51.3804",
        "title": "Nurse Anesthetist"
      },
      {
        "id": "cip-51-3805",
        "code": "51.3805",
        "title": "Family Practice Nurse/Nurse Practitioner"
      },
      {
        "id": "cip-51-3806",
        "code": "51.3806",
        "title": "Maternal/Child Health and Neonatal Nurse/Nursing"
      },
      {
        "id": "cip-51-3807",
        "code": "51.3807",
        "title": "Nurse Midwife/Nursing Midwifery"
      },
      {
        "id": "cip-51-3808",
        "code": "51.3808",
        "title": "Nursing Science (MS, PhD)"
      },
      {
        "id": "cip-51-3809",
        "code": "51.3809",
        "title": "Pediatric Nurse/Nursing"
      },
      {
        "id": "cip-51-3810",
        "code": "51.3810",
        "title": "Psychiatric/Mental Health Nurse/Nursing"
      },
      {
        "id": "cip-51-3811",
        "code": "51.3811",
        "title": "Public Health/Community Nurse/Nursing"
      },
      {
        "id": "cip-51-3812",
        "code": "51.3812",
        "title": "Perioperative/Operating Room and Surgical Nurse/Nursing"
      },
      {
        "id": "cip-51-3813",
        "code": "51.3813",
        "title": "Clinical Nurse Specialist"
      },
      {
        "id": "cip-51-3814",
        "code": "51.3814",
        "title": "Critical Care Nursing"
      },
      {
        "id": "cip-51-3815",
        "code": "51.3815",
        "title": "Occupational and Environmental Health Nursing"
      },
      {
        "id": "cip-51-3816",
        "code": "51.3816",
        "title": "Emergency Room/Trauma Nursing"
      },
      {
        "id": "cip-51-3817",
        "code": "51.3817",
        "title": "Nursing Education"
      },
      {
        "id": "cip-51-3818",
        "code": "51.3818",
        "title": "Nursing Practice"
      },
      {
        "id": "cip-51-3819",
        "code": "51.3819",
        "title": "Palliative Care Nursing"
      },
      {
        "id": "cip-51-3820",
        "code": "51.3820",
        "title": "Clinical Nurse Leader"
      },
      {
        "id": "cip-51-3821",
        "code": "51.3821",
        "title": "Geriatric Nurse/Nursing"
      },
      {
        "id": "cip-51-3822",
        "code": "51.3822",
        "title": "Women's Health Nurse/Nursing"
      },
      {
        "id": "cip-51-3899",
        "code": "51.3899",
        "title": "Registered Nursing, Nursing Administration, Nursing Research and Clinical Nursing, Other"
      }
    ]
  },
  {
    "code": "51.39",
    "title": "Practical Nursing, Vocational Nursing and Nursing Assistants",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-3901",
        "code": "51.3901",
        "title": "Licensed Practical/Vocational Nurse Training (LPN, LVN, Cert., Dipl, AAS)"
      },
      {
        "id": "cip-51-3902",
        "code": "51.3902",
        "title": "Nurse/Nursing Assistant/Aide and Patient Care Assistant"
      },
      {
        "id": "cip-51-3999",
        "code": "51.3999",
        "title": "Practical Nursing, Vocational Nursing and Nursing Assistants, Other"
      }
    ]
  },
  {
    "code": "51.99",
    "title": "Health Professions and Related Clinical Sciences, Other",
    "parentCode": "51",
    "parentTitle": "HEALTH PROFESSIONS AND RELATED CLINICAL SCIENCES",
    "majors": [
      {
        "id": "cip-51-9999",
        "code": "51.9999",
        "title": "Health Professions and Related Clinical Sciences, Other"
      }
    ]
  },
  {
    "code": "52.01",
    "title": "Business/Commerce, General",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0101",
        "code": "52.0101",
        "title": "Business/Commerce, General"
      }
    ]
  },
  {
    "code": "52.02",
    "title": "Business Administration, Management and Operations",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0201",
        "code": "52.0201",
        "title": "Business Administration and Management, General"
      },
      {
        "id": "cip-52-0202",
        "code": "52.0202",
        "title": "Purchasing, Procurement/Acquisitions and Contracts Management"
      },
      {
        "id": "cip-52-0203",
        "code": "52.0203",
        "title": "Logistics and Materials Management"
      },
      {
        "id": "cip-52-0204",
        "code": "52.0204",
        "title": "Office Management and Supervision"
      },
      {
        "id": "cip-52-0205",
        "code": "52.0205",
        "title": "Operations Management and Supervision"
      },
      {
        "id": "cip-52-0206",
        "code": "52.0206",
        "title": "Non-Profit/Public/Organizational Management"
      },
      {
        "id": "cip-52-0207",
        "code": "52.0207",
        "title": "Customer Service Management"
      },
      {
        "id": "cip-52-0208",
        "code": "52.0208",
        "title": "E-Commerce/Electronic Commerce"
      },
      {
        "id": "cip-52-0209",
        "code": "52.0209",
        "title": "Transportation/Transportation Management"
      },
      {
        "id": "cip-52-0210",
        "code": "52.0210",
        "title": "Research and Development Management"
      },
      {
        "id": "cip-52-0211",
        "code": "52.0211",
        "title": "Project Management"
      },
      {
        "id": "cip-52-0212",
        "code": "52.0212",
        "title": "Retail Management"
      },
      {
        "id": "cip-52-0213",
        "code": "52.0213",
        "title": "Organizational Leadership"
      },
      {
        "id": "cip-52-0299",
        "code": "52.0299",
        "title": "Business Administration, Management and Operations, Other"
      }
    ]
  },
  {
    "code": "52.03",
    "title": "Accounting and Related Services",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0301",
        "code": "52.0301",
        "title": "Accounting"
      },
      {
        "id": "cip-52-0302",
        "code": "52.0302",
        "title": "Accounting Technology/Technician and Bookkeeping"
      },
      {
        "id": "cip-52-0303",
        "code": "52.0303",
        "title": "Auditing"
      },
      {
        "id": "cip-52-0304",
        "code": "52.0304",
        "title": "Accounting and Finance"
      },
      {
        "id": "cip-52-0305",
        "code": "52.0305",
        "title": "Accounting and Business/Management"
      },
      {
        "id": "cip-52-0399",
        "code": "52.0399",
        "title": "Accounting and Related Services, Other"
      }
    ]
  },
  {
    "code": "52.04",
    "title": "Business Operations Support and Assistant Services",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0401",
        "code": "52.0401",
        "title": "Administrative Assistant and Secretarial Science, General"
      },
      {
        "id": "cip-52-0402",
        "code": "52.0402",
        "title": "Executive Assistant/Executive Secretary"
      },
      {
        "id": "cip-52-0406",
        "code": "52.0406",
        "title": "Receptionist"
      },
      {
        "id": "cip-52-0407",
        "code": "52.0407",
        "title": "Business/Office Automation/Technology/Data Entry"
      },
      {
        "id": "cip-52-0408",
        "code": "52.0408",
        "title": "General Office Occupations and Clerical Services"
      },
      {
        "id": "cip-52-0409",
        "code": "52.0409",
        "title": "Parts, Warehousing, and Inventory Management Operations"
      },
      {
        "id": "cip-52-0410",
        "code": "52.0410",
        "title": "Traffic, Customs, and Transportation Clerk/Technician"
      },
      {
        "id": "cip-52-0411",
        "code": "52.0411",
        "title": "Customer Service Support/Call Center/Teleservice Operation"
      },
      {
        "id": "cip-52-0499",
        "code": "52.0499",
        "title": "Business Operations Support and Secretarial Services, Other"
      }
    ]
  },
  {
    "code": "52.05",
    "title": "Business/Corporate Communications",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0501",
        "code": "52.0501",
        "title": "Business/Corporate Communications"
      }
    ]
  },
  {
    "code": "52.06",
    "title": "Business/Managerial Economics",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0601",
        "code": "52.0601",
        "title": "Business/Managerial Economics"
      }
    ]
  },
  {
    "code": "52.07",
    "title": "Entrepreneurial and Small Business Operations",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0701",
        "code": "52.0701",
        "title": "Entrepreneurship/Entrepreneurial Studies"
      },
      {
        "id": "cip-52-0702",
        "code": "52.0702",
        "title": "Franchising and Franchise Operations"
      },
      {
        "id": "cip-52-0703",
        "code": "52.0703",
        "title": "Small Business Administration/Management"
      },
      {
        "id": "cip-52-0799",
        "code": "52.0799",
        "title": "Entrepreneurial and Small Business Operations, Other"
      }
    ]
  },
  {
    "code": "52.08",
    "title": "Finance and Financial Management Services",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0801",
        "code": "52.0801",
        "title": "Finance, General"
      },
      {
        "id": "cip-52-0803",
        "code": "52.0803",
        "title": "Banking and Financial Support Services"
      },
      {
        "id": "cip-52-0804",
        "code": "52.0804",
        "title": "Financial Planning and Services"
      },
      {
        "id": "cip-52-0806",
        "code": "52.0806",
        "title": "International Finance"
      },
      {
        "id": "cip-52-0807",
        "code": "52.0807",
        "title": "Investments and Securities"
      },
      {
        "id": "cip-52-0808",
        "code": "52.0808",
        "title": "Public Finance"
      },
      {
        "id": "cip-52-0809",
        "code": "52.0809",
        "title": "Credit Management"
      },
      {
        "id": "cip-52-0899",
        "code": "52.0899",
        "title": "Finance and Financial Management Services, Other"
      }
    ]
  },
  {
    "code": "52.09",
    "title": "Hospitality Administration/Management",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-0901",
        "code": "52.0901",
        "title": "Hospitality Administration/Management, General"
      },
      {
        "id": "cip-52-0903",
        "code": "52.0903",
        "title": "Tourism and Travel Services Management"
      },
      {
        "id": "cip-52-0904",
        "code": "52.0904",
        "title": "Hotel/Motel Administration/Management"
      },
      {
        "id": "cip-52-0905",
        "code": "52.0905",
        "title": "Restaurant/Food Services Management"
      },
      {
        "id": "cip-52-0906",
        "code": "52.0906",
        "title": "Resort Management"
      },
      {
        "id": "cip-52-0907",
        "code": "52.0907",
        "title": "Meeting and Event Planning"
      },
      {
        "id": "cip-52-0908",
        "code": "52.0908",
        "title": "Casino Management"
      },
      {
        "id": "cip-52-0909",
        "code": "52.0909",
        "title": "Hotel, Motel, and Restaurant Management"
      },
      {
        "id": "cip-52-0999",
        "code": "52.0999",
        "title": "Hospitality Administration/Management, Other"
      }
    ]
  },
  {
    "code": "52.10",
    "title": "Human Resources Management and Services",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1001",
        "code": "52.1001",
        "title": "Human Resources Management/Personnel Administration, General"
      },
      {
        "id": "cip-52-1002",
        "code": "52.1002",
        "title": "Labor and Industrial Relations"
      },
      {
        "id": "cip-52-1003",
        "code": "52.1003",
        "title": "Organizational Behavior Studies"
      },
      {
        "id": "cip-52-1004",
        "code": "52.1004",
        "title": "Labor Studies"
      },
      {
        "id": "cip-52-1005",
        "code": "52.1005",
        "title": "Human Resources Development"
      },
      {
        "id": "cip-52-1099",
        "code": "52.1099",
        "title": "Human Resources Management and Services, Other"
      }
    ]
  },
  {
    "code": "52.11",
    "title": "International Business",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1101",
        "code": "52.1101",
        "title": "International Business/Trade/Commerce"
      }
    ]
  },
  {
    "code": "52.12",
    "title": "Management Information Systems and Services",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1201",
        "code": "52.1201",
        "title": "Management Information Systems, General"
      },
      {
        "id": "cip-52-1206",
        "code": "52.1206",
        "title": "Information Resources Management/CIO Training"
      },
      {
        "id": "cip-52-1207",
        "code": "52.1207",
        "title": "Knowledge Management"
      },
      {
        "id": "cip-52-1299",
        "code": "52.1299",
        "title": "Management Information Systems and Services, Other"
      }
    ]
  },
  {
    "code": "52.13",
    "title": "Management Sciences and Quantitative Methods",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1301",
        "code": "52.1301",
        "title": "Management Science, General"
      },
      {
        "id": "cip-52-1302",
        "code": "52.1302",
        "title": "Business Statistics"
      },
      {
        "id": "cip-52-1304",
        "code": "52.1304",
        "title": "Actuarial Science"
      },
      {
        "id": "cip-52-1399",
        "code": "52.1399",
        "title": "Management Sciences and Quantitative Methods, Other"
      }
    ]
  },
  {
    "code": "52.14",
    "title": "Marketing",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1401",
        "code": "52.1401",
        "title": "Marketing/Marketing Management, General"
      },
      {
        "id": "cip-52-1402",
        "code": "52.1402",
        "title": "Marketing Research"
      },
      {
        "id": "cip-52-1403",
        "code": "52.1403",
        "title": "International Marketing"
      },
      {
        "id": "cip-52-1499",
        "code": "52.1499",
        "title": "Marketing, Other"
      }
    ]
  },
  {
    "code": "52.15",
    "title": "Real Estate",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1501",
        "code": "52.1501",
        "title": "Real Estate"
      }
    ]
  },
  {
    "code": "52.16",
    "title": "Taxation",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1601",
        "code": "52.1601",
        "title": "Taxation"
      }
    ]
  },
  {
    "code": "52.17",
    "title": "Insurance",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1701",
        "code": "52.1701",
        "title": "Insurance"
      }
    ]
  },
  {
    "code": "52.18",
    "title": "General Sales, Merchandising and Related Marketing Operations",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1801",
        "code": "52.1801",
        "title": "Sales, Distribution, and Marketing Operations, General"
      },
      {
        "id": "cip-52-1802",
        "code": "52.1802",
        "title": "Merchandising and Buying Operations"
      },
      {
        "id": "cip-52-1803",
        "code": "52.1803",
        "title": "Retailing and Retail Operations"
      },
      {
        "id": "cip-52-1804",
        "code": "52.1804",
        "title": "Selling Skills and Sales Operations"
      },
      {
        "id": "cip-52-1899",
        "code": "52.1899",
        "title": "General Merchandising, Sales, and Related Marketing Operations, Other"
      }
    ]
  },
  {
    "code": "52.19",
    "title": "Specialized Sales, Merchandising and Marketing Operations",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-1901",
        "code": "52.1901",
        "title": "Auctioneering"
      },
      {
        "id": "cip-52-1902",
        "code": "52.1902",
        "title": "Fashion Merchandising"
      },
      {
        "id": "cip-52-1903",
        "code": "52.1903",
        "title": "Fashion Modeling"
      },
      {
        "id": "cip-52-1904",
        "code": "52.1904",
        "title": "Apparel and Accessories Marketing Operations"
      },
      {
        "id": "cip-52-1905",
        "code": "52.1905",
        "title": "Tourism and Travel Services Marketing Operations"
      },
      {
        "id": "cip-52-1906",
        "code": "52.1906",
        "title": "Tourism Promotion Operations"
      },
      {
        "id": "cip-52-1907",
        "code": "52.1907",
        "title": "Vehicle and Vehicle Parts and Accessories Marketing Operations"
      },
      {
        "id": "cip-52-1908",
        "code": "52.1908",
        "title": "Business and Personal/Financial Services Marketing Operations"
      },
      {
        "id": "cip-52-1909",
        "code": "52.1909",
        "title": "Special Products Marketing Operations"
      },
      {
        "id": "cip-52-1910",
        "code": "52.1910",
        "title": "Hospitality and Recreation Marketing Operations"
      },
      {
        "id": "cip-52-1999",
        "code": "52.1999",
        "title": "Specialized Merchandising, Sales, and Marketing Operations, Other"
      }
    ]
  },
  {
    "code": "52.20",
    "title": "Construction Management",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-2001",
        "code": "52.2001",
        "title": "Construction Management"
      }
    ]
  },
  {
    "code": "52.21",
    "title": "Telecommunications Management",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-2101",
        "code": "52.2101",
        "title": "Telecommunications Management"
      }
    ]
  },
  {
    "code": "52.99",
    "title": "Business, Management, Marketing, and Related Support Services, Other",
    "parentCode": "52",
    "parentTitle": "BUSINESS, MANAGEMENT, MARKETING, AND RELATED SUPPORT SERVICES",
    "majors": [
      {
        "id": "cip-52-9999",
        "code": "52.9999",
        "title": "Business, Management, Marketing, and Related Support Services, Other"
      }
    ]
  },
  {
    "code": "53.01",
    "title": "High School/Secondary Diploma Programs",
    "parentCode": "53",
    "parentTitle": "HIGH SCHOOL/SECONDARY DIPLOMAS AND CERTIFICATES",
    "majors": [
      {
        "id": "cip-53-0101",
        "code": "53.0101",
        "title": "Regular/General High School/Secondary Diploma Program"
      },
      {
        "id": "cip-53-0102",
        "code": "53.0102",
        "title": "College/University Preparatory and Advanced High School/Secondary Diploma Program"
      },
      {
        "id": "cip-53-0103",
        "code": "53.0103",
        "title": "Vocational High School and Secondary Business/Vocational-Industrial/Occupational Diploma Program"
      },
      {
        "id": "cip-53-0104",
        "code": "53.0104",
        "title": "Honors/Regents High School/Secondary Diploma Program"
      },
      {
        "id": "cip-53-0105",
        "code": "53.0105",
        "title": "Adult High School/Secondary Diploma Program"
      },
      {
        "id": "cip-53-0199",
        "code": "53.0199",
        "title": "High School/Secondary Diploma Programs, Other"
      }
    ]
  },
  {
    "code": "53.02",
    "title": "High School/Secondary Certificate Programs",
    "parentCode": "53",
    "parentTitle": "HIGH SCHOOL/SECONDARY DIPLOMAS AND CERTIFICATES",
    "majors": [
      {
        "id": "cip-53-0201",
        "code": "53.0201",
        "title": "High School Equivalence Certificate Program"
      },
      {
        "id": "cip-53-0202",
        "code": "53.0202",
        "title": "High School Certificate of Competence Program"
      },
      {
        "id": "cip-53-0203",
        "code": "53.0203",
        "title": "Certificate of IEP Completion Program"
      },
      {
        "id": "cip-53-0299",
        "code": "53.0299",
        "title": "High School/Secondary Certificates, Other"
      }
    ]
  },
  {
    "code": "54.01",
    "title": "History",
    "parentCode": "54",
    "parentTitle": "HISTORY",
    "majors": [
      {
        "id": "cip-54-0101",
        "code": "54.0101",
        "title": "History, General"
      },
      {
        "id": "cip-54-0102",
        "code": "54.0102",
        "title": "American History (United States)"
      },
      {
        "id": "cip-54-0103",
        "code": "54.0103",
        "title": "European History"
      },
      {
        "id": "cip-54-0104",
        "code": "54.0104",
        "title": "History and Philosophy of Science and Technology"
      },
      {
        "id": "cip-54-0105",
        "code": "54.0105",
        "title": "Public/Applied History and Archival Administration"
      },
      {
        "id": "cip-54-0106",
        "code": "54.0106",
        "title": "Asian History"
      },
      {
        "id": "cip-54-0107",
        "code": "54.0107",
        "title": "Canadian History"
      },
      {
        "id": "cip-54-0108",
        "code": "54.0108",
        "title": "Military History"
      },
      {
        "id": "cip-54-0199",
        "code": "54.0199",
        "title": "History, Other"
      }
    ]
  },
  {
    "code": "60.01",
    "title": "Dental Residency Programs",
    "parentCode": "60",
    "parentTitle": "Residency Programs",
    "majors": [
      {
        "id": "cip-60-0101",
        "code": "60.0101",
        "title": "Dental/Oral Surgery Specialty"
      },
      {
        "id": "cip-60-0102",
        "code": "60.0102",
        "title": "Dental Public Health Specialty"
      },
      {
        "id": "cip-60-0103",
        "code": "60.0103",
        "title": "Endodontics Specialty"
      },
      {
        "id": "cip-60-0104",
        "code": "60.0104",
        "title": "Oral Pathology Specialty"
      },
      {
        "id": "cip-60-0105",
        "code": "60.0105",
        "title": "Orthodontics Specialty"
      },
      {
        "id": "cip-60-0106",
        "code": "60.0106",
        "title": "Pedodontics Specialty"
      },
      {
        "id": "cip-60-0107",
        "code": "60.0107",
        "title": "Periodontics Specialty"
      },
      {
        "id": "cip-60-0108",
        "code": "60.0108",
        "title": "Prosthodontics Specialty"
      },
      {
        "id": "cip-60-0109",
        "code": "60.0109",
        "title": "Oral and Maxillofacial Radiology Residency Program"
      },
      {
        "id": "cip-60-0199",
        "code": "60.0199",
        "title": "Dental Residency Program, Other"
      }
    ]
  },
  {
    "code": "60.03",
    "title": "Veterinary Residency Programs",
    "parentCode": "60",
    "parentTitle": "Residency Programs",
    "majors": [
      {
        "id": "cip-60-0301",
        "code": "60.0301",
        "title": "Veterinary Anesthesiology"
      },
      {
        "id": "cip-60-0302",
        "code": "60.0302",
        "title": "Veterinary Dentistry"
      },
      {
        "id": "cip-60-0303",
        "code": "60.0303",
        "title": "Veterinary Dermatology"
      },
      {
        "id": "cip-60-0304",
        "code": "60.0304",
        "title": "Veterinary Emergency and Critical Care Medicine"
      },
      {
        "id": "cip-60-0305",
        "code": "60.0305",
        "title": "Veterinary Internal Medicine"
      },
      {
        "id": "cip-60-0306",
        "code": "60.0306",
        "title": "Laboratory Animal Medicine"
      },
      {
        "id": "cip-60-0307",
        "code": "60.0307",
        "title": "Veterinary Microbiology"
      },
      {
        "id": "cip-60-0308",
        "code": "60.0308",
        "title": "Veterinary Nutrition"
      },
      {
        "id": "cip-60-0309",
        "code": "60.0309",
        "title": "Veterinary Ophthalmology"
      },
      {
        "id": "cip-60-0310",
        "code": "60.0310",
        "title": "Veterinary Pathology"
      },
      {
        "id": "cip-60-0311",
        "code": "60.0311",
        "title": "Veterinary Practice"
      },
      {
        "id": "cip-60-0312",
        "code": "60.0312",
        "title": "Veterinary Preventive Medicine"
      },
      {
        "id": "cip-60-0313",
        "code": "60.0313",
        "title": "Veterinary Radiology"
      },
      {
        "id": "cip-60-0314",
        "code": "60.0314",
        "title": "Veterinary Surgery"
      },
      {
        "id": "cip-60-0315",
        "code": "60.0315",
        "title": "Theriogenology"
      },
      {
        "id": "cip-60-0316",
        "code": "60.0316",
        "title": "Veterinary Toxicology"
      },
      {
        "id": "cip-60-0317",
        "code": "60.0317",
        "title": "Zoological Medicine"
      },
      {
        "id": "cip-60-0318",
        "code": "60.0318",
        "title": "Poultry Veterinarian Residency Program"
      },
      {
        "id": "cip-60-0319",
        "code": "60.0319",
        "title": "Veterinary Behaviorist Residency Program"
      },
      {
        "id": "cip-60-0320",
        "code": "60.0320",
        "title": "Veterinary Clinical Pharmacology Residency Program"
      },
      {
        "id": "cip-60-0399",
        "code": "60.0399",
        "title": "Veterinary Residency Programs, Other"
      }
    ]
  },
  {
    "code": "60.04",
    "title": "Medical Residency Programs - General Certificates",
    "parentCode": "60",
    "parentTitle": "Residency Programs",
    "majors": [
      {
        "id": "cip-60-0401",
        "code": "60.0401",
        "title": "Aerospace Medicine"
      },
      {
        "id": "cip-60-0402",
        "code": "60.0402",
        "title": "Allergies and Immunology"
      },
      {
        "id": "cip-60-0403",
        "code": "60.0403",
        "title": "Anesthesiology"
      },
      {
        "id": "cip-60-0404",
        "code": "60.0404",
        "title": "Child Neurology"
      },
      {
        "id": "cip-60-0405",
        "code": "60.0405",
        "title": "Clinical Biochemical Genetics Residency Program"
      },
      {
        "id": "cip-60-0406",
        "code": "60.0406",
        "title": "Clinical Cytogenetics Residency Program"
      },
      {
        "id": "cip-60-0407",
        "code": "60.0407",
        "title": "Clinical Genetics Residency Program"
      },
      {
        "id": "cip-60-0408",
        "code": "60.0408",
        "title": "Clinical Molecular Genetics Residency Program"
      },
      {
        "id": "cip-60-0409",
        "code": "60.0409",
        "title": "Colon and Rectal Surgery"
      },
      {
        "id": "cip-60-0410",
        "code": "60.0410",
        "title": "Dermatology"
      },
      {
        "id": "cip-60-0411",
        "code": "60.0411",
        "title": "Diagnostic Radiology"
      },
      {
        "id": "cip-60-0412",
        "code": "60.0412",
        "title": "Emergency Medicine"
      },
      {
        "id": "cip-60-0413",
        "code": "60.0413",
        "title": "Family Medicine"
      },
      {
        "id": "cip-60-0414",
        "code": "60.0414",
        "title": "General Surgery"
      },
      {
        "id": "cip-60-0415",
        "code": "60.0415",
        "title": "Internal Medicine"
      },
      {
        "id": "cip-60-0416",
        "code": "60.0416",
        "title": "Neurological Surgery/Neurosurgery"
      },
      {
        "id": "cip-60-0417",
        "code": "60.0417",
        "title": "Neurology"
      },
      {
        "id": "cip-60-0418",
        "code": "60.0418",
        "title": "Nuclear Medicine"
      },
      {
        "id": "cip-60-0419",
        "code": "60.0419",
        "title": "Obstetrics and Gynecology"
      },
      {
        "id": "cip-60-0420",
        "code": "60.0420",
        "title": "Occupational Medicine"
      },
      {
        "id": "cip-60-0421",
        "code": "60.0421",
        "title": "Ophthalmology"
      },
      {
        "id": "cip-60-0422",
        "code": "60.0422",
        "title": "Orthopedics/Orthopedic Surgery"
      },
      {
        "id": "cip-60-0423",
        "code": "60.0423",
        "title": "Otolaryngology"
      },
      {
        "id": "cip-60-0424",
        "code": "60.0424",
        "title": "Pathology"
      },
      {
        "id": "cip-60-0425",
        "code": "60.0425",
        "title": "Pediatrics"
      },
      {
        "id": "cip-60-0426",
        "code": "60.0426",
        "title": "Physical and Rehabilitation Medicine"
      },
      {
        "id": "cip-60-0427",
        "code": "60.0427",
        "title": "Plastic Surgery"
      },
      {
        "id": "cip-60-0428",
        "code": "60.0428",
        "title": "Psychiatry"
      },
      {
        "id": "cip-60-0429",
        "code": "60.0429",
        "title": "Public Health and General Preventive Medicine Residency Program"
      },
      {
        "id": "cip-60-0430",
        "code": "60.0430",
        "title": "Radiation Oncology"
      },
      {
        "id": "cip-60-0431",
        "code": "60.0431",
        "title": "Radiologic Physics Residency Program"
      },
      {
        "id": "cip-60-0432",
        "code": "60.0432",
        "title": "Thoracic Surgery"
      },
      {
        "id": "cip-60-0433",
        "code": "60.0433",
        "title": "Urology"
      },
      {
        "id": "cip-60-0434",
        "code": "60.0434",
        "title": "Vascular Surgery"
      },
      {
        "id": "cip-60-0499",
        "code": "60.0499",
        "title": "Medical Residency Programs - General Certificates, Other"
      }
    ]
  },
  {
    "code": "60.05",
    "title": "Medical Residency Programs - Subspecialty Certificates",
    "parentCode": "60",
    "parentTitle": "Residency Programs",
    "majors": [
      {
        "id": "cip-60-0501",
        "code": "60.0501",
        "title": "Addiction Psychiatry Residency Program"
      },
      {
        "id": "cip-60-0502",
        "code": "60.0502",
        "title": "Adolescent Medicine Residency Program"
      },
      {
        "id": "cip-60-0503",
        "code": "60.0503",
        "title": "Blood Banking"
      },
      {
        "id": "cip-60-0504",
        "code": "60.0504",
        "title": "Cardiology"
      },
      {
        "id": "cip-60-0505",
        "code": "60.0505",
        "title": "Chemical Pathology"
      },
      {
        "id": "cip-60-0506",
        "code": "60.0506",
        "title": "Child Abuse Pediatrics Residency Program"
      },
      {
        "id": "cip-60-0507",
        "code": "60.0507",
        "title": "Child Psychiatry"
      },
      {
        "id": "cip-60-0508",
        "code": "60.0508",
        "title": "Clinical Cardiac Electrophysiology Residency Program"
      },
      {
        "id": "cip-60-0509",
        "code": "60.0509",
        "title": "Clinical Neurophysiology Residency Program"
      },
      {
        "id": "cip-60-0510",
        "code": "60.0510",
        "title": "Congenital Cardiac Surgery Residency Program"
      },
      {
        "id": "cip-60-0511",
        "code": "60.0511",
        "title": "Critical Care Medicine"
      },
      {
        "id": "cip-60-0512",
        "code": "60.0512",
        "title": "Cytopathology"
      },
      {
        "id": "cip-60-0513",
        "code": "60.0513",
        "title": "Dermatopathology"
      },
      {
        "id": "cip-60-0514",
        "code": "60.0514",
        "title": "Developmental-Behavioral Pediatrics Residency Program"
      },
      {
        "id": "cip-60-0515",
        "code": "60.0515",
        "title": "Diagnostic Radiologic Physics Residency Program"
      },
      {
        "id": "cip-60-0516",
        "code": "60.0516",
        "title": "Endocrinology and Metabolism"
      },
      {
        "id": "cip-60-0517",
        "code": "60.0517",
        "title": "Forensic Pathology"
      },
      {
        "id": "cip-60-0518",
        "code": "60.0518",
        "title": "Forensic Psychiatry Residency Program"
      },
      {
        "id": "cip-60-0519",
        "code": "60.0519",
        "title": "Gastroenterology"
      },
      {
        "id": "cip-60-0520",
        "code": "60.0520",
        "title": "Geriatric Medicine"
      },
      {
        "id": "cip-60-0521",
        "code": "60.0521",
        "title": "Geriatric Psychiatry Residency Program"
      },
      {
        "id": "cip-60-0522",
        "code": "60.0522",
        "title": "Gynecologic Oncology Residency Program"
      },
      {
        "id": "cip-60-0523",
        "code": "60.0523",
        "title": "Hematological Pathology"
      },
      {
        "id": "cip-60-0524",
        "code": "60.0524",
        "title": "Hematology"
      },
      {
        "id": "cip-60-0525",
        "code": "60.0525",
        "title": "Hospice and Palliative Medicine Residency Program"
      },
      {
        "id": "cip-60-0526",
        "code": "60.0526",
        "title": "Immunopathology"
      },
      {
        "id": "cip-60-0527",
        "code": "60.0527",
        "title": "Infectious Disease"
      },
      {
        "id": "cip-60-0528",
        "code": "60.0528",
        "title": "Interventional Cardiology Residency Program"
      },
      {
        "id": "cip-60-0529",
        "code": "60.0529",
        "title": "Laboratory Medicine"
      },
      {
        "id": "cip-60-0530",
        "code": "60.0530",
        "title": "Maternal and Fetal Medicine Residency Program"
      },
      {
        "id": "cip-60-0531",
        "code": "60.0531",
        "title": "Medical Biochemical Genetics Residency Program"
      },
      {
        "id": "cip-60-0532",
        "code": "60.0532",
        "title": "Medical Microbiology Residency Program"
      },
      {
        "id": "cip-60-0533",
        "code": "60.0533",
        "title": "Medical Nuclear Physics Residency Program"
      },
      {
        "id": "cip-60-0534",
        "code": "60.0534",
        "title": "Oncology"
      },
      {
        "id": "cip-60-0535",
        "code": "60.0535",
        "title": "Medical Toxicology Residency Program"
      },
      {
        "id": "cip-60-0536",
        "code": "60.0536",
        "title": "Molecular Genetic Pathology Residency Program"
      },
      {
        "id": "cip-60-0537",
        "code": "60.0537",
        "title": "Musculoskeletal Oncology"
      },
      {
        "id": "cip-60-0538",
        "code": "60.0538",
        "title": "Neonatal-Perinatal Medicine"
      },
      {
        "id": "cip-60-0539",
        "code": "60.0539",
        "title": "Nephrology"
      },
      {
        "id": "cip-60-0540",
        "code": "60.0540",
        "title": "Neurodevelopmental Disabilities Residency Program"
      },
      {
        "id": "cip-60-0541",
        "code": "60.0541",
        "title": "Neuromuscular Medicine Residency Program"
      },
      {
        "id": "cip-60-0542",
        "code": "60.0542",
        "title": "Neuropathology"
      },
      {
        "id": "cip-60-0543",
        "code": "60.0543",
        "title": "Neuroradiology Residency Program"
      },
      {
        "id": "cip-60-0544",
        "code": "60.0544",
        "title": "Neurotology Residency Program"
      },
      {
        "id": "cip-60-0545",
        "code": "60.0545",
        "title": "Nuclear Radiology"
      },
      {
        "id": "cip-60-0546",
        "code": "60.0546",
        "title": "Orthopedic Sports Medicine Residency Program"
      },
      {
        "id": "cip-60-0547",
        "code": "60.0547",
        "title": "Orthopedic Surgery of the Spine"
      },
      {
        "id": "cip-60-0548",
        "code": "60.0548",
        "title": "Pain Medicine Residency Program"
      },
      {
        "id": "cip-60-0549",
        "code": "60.0549",
        "title": "Pediatric Cardiology"
      },
      {
        "id": "cip-60-0550",
        "code": "60.0550",
        "title": "Pediatric Critical Care Medicine Residency Program"
      },
      {
        "id": "cip-60-0551",
        "code": "60.0551",
        "title": "Pediatric Dermatology Residency Program"
      },
      {
        "id": "cip-60-0552",
        "code": "60.0552",
        "title": "Pediatric Emergency Medicine Residency Program"
      },
      {
        "id": "cip-60-0553",
        "code": "60.0553",
        "title": "Pediatric Endocrinology"
      },
      {
        "id": "cip-60-0554",
        "code": "60.0554",
        "title": "Pediatric Gastroenterology Residency Program"
      },
      {
        "id": "cip-60-0555",
        "code": "60.0555",
        "title": "Pediatric Hemato-Oncology"
      },
      {
        "id": "cip-60-0556",
        "code": "60.0556",
        "title": "Pediatric Infectious Diseases Residency Program"
      },
      {
        "id": "cip-60-0557",
        "code": "60.0557",
        "title": "Pediatric Nephrology"
      },
      {
        "id": "cip-60-0558",
        "code": "60.0558",
        "title": "Pediatric Orthopedics"
      },
      {
        "id": "cip-60-0559",
        "code": "60.0559",
        "title": "Pediatric Otolaryngology Residency Program"
      },
      {
        "id": "cip-60-0560",
        "code": "60.0560",
        "title": "Pediatric Pathology Residency Program"
      },
      {
        "id": "cip-60-0561",
        "code": "60.0561",
        "title": "Pediatric Pulmonology Residency Program"
      },
      {
        "id": "cip-60-0562",
        "code": "60.0562",
        "title": "Pediatric Radiology Residency Program"
      },
      {
        "id": "cip-60-0563",
        "code": "60.0563",
        "title": "Pediatric Rehabilitation Medicine Residency Program"
      },
      {
        "id": "cip-60-0564",
        "code": "60.0564",
        "title": "Pediatric Rheumatology Residency Program"
      },
      {
        "id": "cip-60-0565",
        "code": "60.0565",
        "title": "Pediatric Surgery"
      },
      {
        "id": "cip-60-0566",
        "code": "60.0566",
        "title": "Pediatric Transplant Hepatology Residency Program"
      },
      {
        "id": "cip-60-0567",
        "code": "60.0567",
        "title": "Pediatric Urology"
      },
      {
        "id": "cip-60-0568",
        "code": "60.0568",
        "title": "Physical Medicine and Rehabilitation/Psychiatry"
      },
      {
        "id": "cip-60-0569",
        "code": "60.0569",
        "title": "Plastic Surgery Within the Head and Neck Residency Program"
      },
      {
        "id": "cip-60-0570",
        "code": "60.0570",
        "title": "Psychosomatic Medicine Residency Program"
      },
      {
        "id": "cip-60-0571",
        "code": "60.0571",
        "title": "Pulmonary Disease"
      },
      {
        "id": "cip-60-0572",
        "code": "60.0572",
        "title": "Radioisotopic Pathology"
      },
      {
        "id": "cip-60-0573",
        "code": "60.0573",
        "title": "Reproductive Endocrinology/Infertility Residency Program"
      },
      {
        "id": "cip-60-0574",
        "code": "60.0574",
        "title": "Rheumatology"
      },
      {
        "id": "cip-60-0575",
        "code": "60.0575",
        "title": "Sleep Medicine Residency Program"
      },
      {
        "id": "cip-60-0576",
        "code": "60.0576",
        "title": "Spinal Cord Injury Medicine Residency Program"
      },
      {
        "id": "cip-60-0577",
        "code": "60.0577",
        "title": "Sports Medicine"
      },
      {
        "id": "cip-60-0578",
        "code": "60.0578",
        "title": "Hand Surgery"
      },
      {
        "id": "cip-60-0579",
        "code": "60.0579",
        "title": "Critical Care Surgery"
      },
      {
        "id": "cip-60-0580",
        "code": "60.0580",
        "title": "Therapeutic Radiologic Physics Residency Program"
      },
      {
        "id": "cip-60-0581",
        "code": "60.0581",
        "title": "Transplant Hepatology Residency Program"
      },
      {
        "id": "cip-60-0582",
        "code": "60.0582",
        "title": "Undersea and Hyperbaric Medicine Residency Program"
      },
      {
        "id": "cip-60-0583",
        "code": "60.0583",
        "title": "Vascular and Interventional Radiology Residency Program"
      },
      {
        "id": "cip-60-0584",
        "code": "60.0584",
        "title": "Vascular Neurology Residency Program"
      },
      {
        "id": "cip-60-0599",
        "code": "60.0599",
        "title": "Medical Residency Programs - Subspecialty Certificates, Other"
      }
    ]
  },
  {
    "code": "60.06",
    "title": "Podiatric Medicine Residency Programs",
    "parentCode": "60",
    "parentTitle": "Residency Programs",
    "majors": [
      {
        "id": "cip-60-0601",
        "code": "60.0601",
        "title": "Podiatric Medicine and Surgery - 24 Residency Program"
      },
      {
        "id": "cip-60-0602",
        "code": "60.0602",
        "title": "Podiatric Medicine and Surgery - 36 Residency Program"
      }
    ]
  }
];

