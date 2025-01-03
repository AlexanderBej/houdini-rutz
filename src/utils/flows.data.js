export const flowsData = [
    {
        id: 1,
        frequency: 'OIL 1',
        material: 'Crude Oil',
        from: {
            name: 'Extractor',
            location: 'Crude Oil Node'
        },
        to: {
            name: 'Fuel Generators Right',
            location: 'Fuel Generators'
        }
    },
    {
        id: 2,
        frequency: 'OIL 2',
        material: 'Crude Oil',
        from: {
            name: 'Extractor',
            location: 'Crude Oil Node'
        },
        to: {
            name: 'Fuel Generators Left',
            location: 'Fuel Generators'
        }
    },
    {
        id: 3,
        frequency: 'WATER 1',
        material: 'Water',
        from: {
            name: 'Extractor',
            location: 'Water Pumps'
        },
        to: {
            name: 'Plastic & Rubber',
            location: '1X'
        }
    },
    {
        id: 4,
        frequency: 'OIL 3',
        material: 'Crude Oil',
        from: {
            name: 'Extractor',
            location: 'Crude Oil Node'
        },
        to: {
            name: 'Plastic & Rubber',
            location: '1X'
        }
    },
     {
        id: 5,
        frequency: 'WATER 2',
        material: 'Water',
        from: {
            name: 'Extractor',
            location: 'Water Pumps'
        },
        to: {
            name: 'Sulfuric Acid',
            location: '1X'
        }
    },
     {
        id: 7,
        frequency: 'WATER 3',
        material: 'Water',
        from: {
            name: 'Water Pumps',
            location: '1X'
        },
        to: {
            name: 'Nuclear Reactor',
            location: '1X'
        }
    },
]
