var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DarmstdterHof_1 = new ol.format.GeoJSON();
var features_DarmstdterHof_1 = format_DarmstdterHof_1.readFeatures(json_DarmstdterHof_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DarmstdterHof_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DarmstdterHof_1.addFeatures(features_DarmstdterHof_1);
var lyr_DarmstdterHof_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DarmstdterHof_1, 
                style: style_DarmstdterHof_1,
                popuplayertitle: 'Darmstädter Hof',
                interactive: true,
                title: '<img src="styles/legend/DarmstdterHof_1.png" /> Darmstädter Hof'
            });
var format_VolksbankKurpfalzKornmarkt_2 = new ol.format.GeoJSON();
var features_VolksbankKurpfalzKornmarkt_2 = format_VolksbankKurpfalzKornmarkt_2.readFeatures(json_VolksbankKurpfalzKornmarkt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VolksbankKurpfalzKornmarkt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VolksbankKurpfalzKornmarkt_2.addFeatures(features_VolksbankKurpfalzKornmarkt_2);
var lyr_VolksbankKurpfalzKornmarkt_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VolksbankKurpfalzKornmarkt_2, 
                style: style_VolksbankKurpfalzKornmarkt_2,
                popuplayertitle: 'Volksbank Kurpfalz, Kornmarkt',
                interactive: true,
                title: '<img src="styles/legend/VolksbankKurpfalzKornmarkt_2.png" /> Volksbank Kurpfalz, Kornmarkt'
            });
var format_RathausBergbahn_3 = new ol.format.GeoJSON();
var features_RathausBergbahn_3 = format_RathausBergbahn_3.readFeatures(json_RathausBergbahn_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RathausBergbahn_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RathausBergbahn_3.addFeatures(features_RathausBergbahn_3);
var lyr_RathausBergbahn_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RathausBergbahn_3, 
                style: style_RathausBergbahn_3,
                popuplayertitle: 'Rathaus/Bergbahn',
                interactive: true,
                title: '<img src="styles/legend/RathausBergbahn_3.png" /> Rathaus/Bergbahn'
            });
var format_Spty4HD_4 = new ol.format.GeoJSON();
var features_Spty4HD_4 = format_Spty4HD_4.readFeatures(json_Spty4HD_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spty4HD_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spty4HD_4.addFeatures(features_Spty4HD_4);
var lyr_Spty4HD_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spty4HD_4, 
                style: style_Spty4HD_4,
                popuplayertitle: 'Späty-4 HD',
                interactive: true,
                title: '<img src="styles/legend/Spty4HD_4.png" /> Späty-4 HD'
            });
var format_TriplexMensa_5 = new ol.format.GeoJSON();
var features_TriplexMensa_5 = format_TriplexMensa_5.readFeatures(json_TriplexMensa_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TriplexMensa_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TriplexMensa_5.addFeatures(features_TriplexMensa_5);
var lyr_TriplexMensa_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TriplexMensa_5, 
                style: style_TriplexMensa_5,
                popuplayertitle: 'Triplex Mensa',
                interactive: true,
                title: '<img src="styles/legend/TriplexMensa_5.png" /> Triplex Mensa'
            });
var format_Universittsbibliothek_6 = new ol.format.GeoJSON();
var features_Universittsbibliothek_6 = format_Universittsbibliothek_6.readFeatures(json_Universittsbibliothek_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universittsbibliothek_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universittsbibliothek_6.addFeatures(features_Universittsbibliothek_6);
var lyr_Universittsbibliothek_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universittsbibliothek_6, 
                style: style_Universittsbibliothek_6,
                popuplayertitle: 'Universitätsbibliothek',
                interactive: true,
                title: '<img src="styles/legend/Universittsbibliothek_6.png" /> Universitätsbibliothek'
            });
var format_HenschelParkhaus_7 = new ol.format.GeoJSON();
var features_HenschelParkhaus_7 = format_HenschelParkhaus_7.readFeatures(json_HenschelParkhaus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HenschelParkhaus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HenschelParkhaus_7.addFeatures(features_HenschelParkhaus_7);
var lyr_HenschelParkhaus_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HenschelParkhaus_7, 
                style: style_HenschelParkhaus_7,
                popuplayertitle: 'Henschel Parkhaus',
                interactive: true,
                title: '<img src="styles/legend/HenschelParkhaus_7.png" /> Henschel Parkhaus'
            });
var format_SparkasseHauptstrae_8 = new ol.format.GeoJSON();
var features_SparkasseHauptstrae_8 = format_SparkasseHauptstrae_8.readFeatures(json_SparkasseHauptstrae_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SparkasseHauptstrae_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SparkasseHauptstrae_8.addFeatures(features_SparkasseHauptstrae_8);
var lyr_SparkasseHauptstrae_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SparkasseHauptstrae_8, 
                style: style_SparkasseHauptstrae_8,
                popuplayertitle: 'Sparkasse, Hauptstraße',
                interactive: true,
                title: '<img src="styles/legend/SparkasseHauptstrae_8.png" /> Sparkasse, Hauptstraße'
            });
var format_VolksbanksKurpfalzHauptstrae_9 = new ol.format.GeoJSON();
var features_VolksbanksKurpfalzHauptstrae_9 = format_VolksbanksKurpfalzHauptstrae_9.readFeatures(json_VolksbanksKurpfalzHauptstrae_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VolksbanksKurpfalzHauptstrae_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VolksbanksKurpfalzHauptstrae_9.addFeatures(features_VolksbanksKurpfalzHauptstrae_9);
var lyr_VolksbanksKurpfalzHauptstrae_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VolksbanksKurpfalzHauptstrae_9, 
                style: style_VolksbanksKurpfalzHauptstrae_9,
                popuplayertitle: 'Volksbanks Kurpfalz, Hauptstraße',
                interactive: true,
                title: '<img src="styles/legend/VolksbanksKurpfalzHauptstrae_9.png" /> Volksbanks Kurpfalz, Hauptstraße'
            });
var format_AlteAnatomieHauptstrae_10 = new ol.format.GeoJSON();
var features_AlteAnatomieHauptstrae_10 = format_AlteAnatomieHauptstrae_10.readFeatures(json_AlteAnatomieHauptstrae_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlteAnatomieHauptstrae_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlteAnatomieHauptstrae_10.addFeatures(features_AlteAnatomieHauptstrae_10);
var lyr_AlteAnatomieHauptstrae_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlteAnatomieHauptstrae_10, 
                style: style_AlteAnatomieHauptstrae_10,
                popuplayertitle: 'Alte Anatomie, Hauptstraße',
                interactive: true,
                title: '<img src="styles/legend/AlteAnatomieHauptstrae_10.png" /> Alte Anatomie, Hauptstraße'
            });
var format_Marstallhof_11 = new ol.format.GeoJSON();
var features_Marstallhof_11 = format_Marstallhof_11.readFeatures(json_Marstallhof_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marstallhof_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marstallhof_11.addFeatures(features_Marstallhof_11);
var lyr_Marstallhof_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marstallhof_11, 
                style: style_Marstallhof_11,
                popuplayertitle: 'Marstallhof',
                interactive: true,
                title: '<img src="styles/legend/Marstallhof_11.png" /> Marstallhof'
            });
var format_HeidelbergerVolksbankHauptstrae_12 = new ol.format.GeoJSON();
var features_HeidelbergerVolksbankHauptstrae_12 = format_HeidelbergerVolksbankHauptstrae_12.readFeatures(json_HeidelbergerVolksbankHauptstrae_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HeidelbergerVolksbankHauptstrae_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HeidelbergerVolksbankHauptstrae_12.addFeatures(features_HeidelbergerVolksbankHauptstrae_12);
var lyr_HeidelbergerVolksbankHauptstrae_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HeidelbergerVolksbankHauptstrae_12, 
                style: style_HeidelbergerVolksbankHauptstrae_12,
                popuplayertitle: 'Heidelberger Volksbank, Hauptstraße',
                interactive: true,
                title: '<img src="styles/legend/HeidelbergerVolksbankHauptstrae_12.png" /> Heidelberger Volksbank, Hauptstraße'
            });
var format_SparkasseUniversittplatz_13 = new ol.format.GeoJSON();
var features_SparkasseUniversittplatz_13 = format_SparkasseUniversittplatz_13.readFeatures(json_SparkasseUniversittplatz_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SparkasseUniversittplatz_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SparkasseUniversittplatz_13.addFeatures(features_SparkasseUniversittplatz_13);
var lyr_SparkasseUniversittplatz_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SparkasseUniversittplatz_13, 
                style: style_SparkasseUniversittplatz_13,
                popuplayertitle: 'Sparkasse, Universitätplatz',
                interactive: true,
                title: '<img src="styles/legend/SparkasseUniversittplatz_13.png" /> Sparkasse, Universitätplatz'
            });
var format_AltstadtSBahnhof1_14 = new ol.format.GeoJSON();
var features_AltstadtSBahnhof1_14 = format_AltstadtSBahnhof1_14.readFeatures(json_AltstadtSBahnhof1_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltstadtSBahnhof1_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltstadtSBahnhof1_14.addFeatures(features_AltstadtSBahnhof1_14);
var lyr_AltstadtSBahnhof1_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AltstadtSBahnhof1_14, 
                style: style_AltstadtSBahnhof1_14,
                popuplayertitle: 'Altstadt S-Bahnhof (1)',
                interactive: true,
                title: '<img src="styles/legend/AltstadtSBahnhof1_14.png" /> Altstadt S-Bahnhof (1)'
            });
var format_AltstadtSBahnhof2_15 = new ol.format.GeoJSON();
var features_AltstadtSBahnhof2_15 = format_AltstadtSBahnhof2_15.readFeatures(json_AltstadtSBahnhof2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AltstadtSBahnhof2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AltstadtSBahnhof2_15.addFeatures(features_AltstadtSBahnhof2_15);
var lyr_AltstadtSBahnhof2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AltstadtSBahnhof2_15, 
                style: style_AltstadtSBahnhof2_15,
                popuplayertitle: 'Altstadt S-Bahnhof (2)',
                interactive: true,
                title: '<img src="styles/legend/AltstadtSBahnhof2_15.png" /> Altstadt S-Bahnhof (2)'
            });
var format_Karlplatz_16 = new ol.format.GeoJSON();
var features_Karlplatz_16 = format_Karlplatz_16.readFeatures(json_Karlplatz_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Karlplatz_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Karlplatz_16.addFeatures(features_Karlplatz_16);
var lyr_Karlplatz_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Karlplatz_16, 
                style: style_Karlplatz_16,
                popuplayertitle: 'Karlplatz',
                interactive: true,
                title: '<img src="styles/legend/Karlplatz_16.png" /> Karlplatz'
            });
var format_Universittsplatz_17 = new ol.format.GeoJSON();
var features_Universittsplatz_17 = format_Universittsplatz_17.readFeatures(json_Universittsplatz_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Universittsplatz_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universittsplatz_17.addFeatures(features_Universittsplatz_17);
var lyr_Universittsplatz_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universittsplatz_17, 
                style: style_Universittsplatz_17,
                popuplayertitle: 'Universitätsplatz',
                interactive: true,
                title: '<img src="styles/legend/Universittsplatz_17.png" /> Universitätsplatz'
            });
var format_AmBrckentor_18 = new ol.format.GeoJSON();
var features_AmBrckentor_18 = format_AmBrckentor_18.readFeatures(json_AmBrckentor_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AmBrckentor_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AmBrckentor_18.addFeatures(features_AmBrckentor_18);
var lyr_AmBrckentor_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AmBrckentor_18, 
                style: style_AmBrckentor_18,
                popuplayertitle: 'Am Brückentor',
                interactive: true,
                title: '<img src="styles/legend/AmBrckentor_18.png" /> Am Brückentor'
            });
var format_PeterskircheFriedrichEbertAnlage_19 = new ol.format.GeoJSON();
var features_PeterskircheFriedrichEbertAnlage_19 = format_PeterskircheFriedrichEbertAnlage_19.readFeatures(json_PeterskircheFriedrichEbertAnlage_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PeterskircheFriedrichEbertAnlage_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PeterskircheFriedrichEbertAnlage_19.addFeatures(features_PeterskircheFriedrichEbertAnlage_19);
var lyr_PeterskircheFriedrichEbertAnlage_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PeterskircheFriedrichEbertAnlage_19, 
                style: style_PeterskircheFriedrichEbertAnlage_19,
                popuplayertitle: 'Peterskirche,  Friedrich-Ebert-Anlage',
                interactive: true,
                title: '<img src="styles/legend/PeterskircheFriedrichEbertAnlage_19.png" /> Peterskirche,  Friedrich-Ebert-Anlage'
            });
var format_FriedrichEbertAnlage48_20 = new ol.format.GeoJSON();
var features_FriedrichEbertAnlage48_20 = format_FriedrichEbertAnlage48_20.readFeatures(json_FriedrichEbertAnlage48_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FriedrichEbertAnlage48_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FriedrichEbertAnlage48_20.addFeatures(features_FriedrichEbertAnlage48_20);
var lyr_FriedrichEbertAnlage48_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FriedrichEbertAnlage48_20, 
                style: style_FriedrichEbertAnlage48_20,
                popuplayertitle: 'Friedrich-Ebert-Anlage,  48',
                interactive: true,
                title: '<img src="styles/legend/FriedrichEbertAnlage48_20.png" /> Friedrich-Ebert-Anlage,  48'
            });
var format_FriedrichEbertPlatz_21 = new ol.format.GeoJSON();
var features_FriedrichEbertPlatz_21 = format_FriedrichEbertPlatz_21.readFeatures(json_FriedrichEbertPlatz_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FriedrichEbertPlatz_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FriedrichEbertPlatz_21.addFeatures(features_FriedrichEbertPlatz_21);
var lyr_FriedrichEbertPlatz_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FriedrichEbertPlatz_21, 
                style: style_FriedrichEbertPlatz_21,
                popuplayertitle: 'Friedrich-Ebert-Platz',
                interactive: true,
                title: '<img src="styles/legend/FriedrichEbertPlatz_21.png" /> Friedrich-Ebert-Platz'
            });
var format_Leyerstrae221_22 = new ol.format.GeoJSON();
var features_Leyerstrae221_22 = format_Leyerstrae221_22.readFeatures(json_Leyerstrae221_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Leyerstrae221_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leyerstrae221_22.addFeatures(features_Leyerstrae221_22);
var lyr_Leyerstrae221_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Leyerstrae221_22, 
                style: style_Leyerstrae221_22,
                popuplayertitle: 'Leyerstraße,  221',
                interactive: true,
                title: '<img src="styles/legend/Leyerstrae221_22.png" /> Leyerstraße,  221'
            });
var group_GeoshapePunkte = new ol.layer.Group({
                                layers: [lyr_AltstadtSBahnhof1_14,lyr_AltstadtSBahnhof2_15,lyr_Karlplatz_16,lyr_Universittsplatz_17,lyr_AmBrckentor_18,lyr_PeterskircheFriedrichEbertAnlage_19,lyr_FriedrichEbertAnlage48_20,lyr_FriedrichEbertPlatz_21,lyr_Leyerstrae221_22,],
                                fold: "open",
                                title: 'Geoshape Punkte'});
var group_Polygons = new ol.layer.Group({
                                layers: [lyr_DarmstdterHof_1,lyr_VolksbankKurpfalzKornmarkt_2,lyr_RathausBergbahn_3,lyr_Spty4HD_4,lyr_TriplexMensa_5,lyr_Universittsbibliothek_6,lyr_HenschelParkhaus_7,lyr_SparkasseHauptstrae_8,lyr_VolksbanksKurpfalzHauptstrae_9,lyr_AlteAnatomieHauptstrae_10,lyr_Marstallhof_11,lyr_HeidelbergerVolksbankHauptstrae_12,lyr_SparkasseUniversittplatz_13,],
                                fold: "open",
                                title: 'Polygons'});

lyr_OSMStandard_0.setVisible(true);lyr_DarmstdterHof_1.setVisible(true);lyr_VolksbankKurpfalzKornmarkt_2.setVisible(true);lyr_RathausBergbahn_3.setVisible(true);lyr_Spty4HD_4.setVisible(true);lyr_TriplexMensa_5.setVisible(true);lyr_Universittsbibliothek_6.setVisible(true);lyr_HenschelParkhaus_7.setVisible(true);lyr_SparkasseHauptstrae_8.setVisible(true);lyr_VolksbanksKurpfalzHauptstrae_9.setVisible(true);lyr_AlteAnatomieHauptstrae_10.setVisible(true);lyr_Marstallhof_11.setVisible(true);lyr_HeidelbergerVolksbankHauptstrae_12.setVisible(true);lyr_SparkasseUniversittplatz_13.setVisible(true);lyr_AltstadtSBahnhof1_14.setVisible(true);lyr_AltstadtSBahnhof2_15.setVisible(true);lyr_Karlplatz_16.setVisible(true);lyr_Universittsplatz_17.setVisible(true);lyr_AmBrckentor_18.setVisible(true);lyr_PeterskircheFriedrichEbertAnlage_19.setVisible(true);lyr_FriedrichEbertAnlage48_20.setVisible(true);lyr_FriedrichEbertPlatz_21.setVisible(true);lyr_Leyerstrae221_22.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_Polygons,group_GeoshapePunkte];
lyr_DarmstdterHof_1.set('fieldAliases', {'fid': 'fid', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Floor': 'Vending_maschine:Floor', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_VolksbankKurpfalzKornmarkt_2.set('fieldAliases', {'fid': 'fid', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_RathausBergbahn_3.set('fieldAliases', {'fid': 'fid', 'opening_hours': 'opening_hours', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_Spty4HD_4.set('fieldAliases', {'fid': 'fid', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_TriplexMensa_5.set('fieldAliases', {'fid': 'fid', 'opening_hours': 'opening_hours', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_Universittsbibliothek_6.set('fieldAliases', {'fid': 'fid', 'opening_hours': 'opening_hours', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_HenschelParkhaus_7.set('fieldAliases', {'fid': 'fid', 'opening_hours': 'opening_hours', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'access': 'access', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_SparkasseHauptstrae_8.set('fieldAliases', {'fid': 'fid', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_VolksbanksKurpfalzHauptstrae_9.set('fieldAliases', {'fid': 'fid', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_AlteAnatomieHauptstrae_10.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_Marstallhof_11.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_HeidelbergerVolksbankHauptstrae_12.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_SparkasseUniversittplatz_13.set('fieldAliases', {'fid': 'fid', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', });
lyr_AltstadtSBahnhof1_14.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_AltstadtSBahnhof2_15.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_Karlplatz_16.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_Universittsplatz_17.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_AmBrckentor_18.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_PeterskircheFriedrichEbertAnlage_19.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:number': 'Vending_maschine:number', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_FriedrichEbertAnlage48_20.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_FriedrichEbertPlatz_21.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (m)': 'Vertical Accuracy (m)', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Condition': 'Vending_maschine:Condition', 'Vending_maschine:Payment_Method': 'Vending_maschine:Payment_Method', 'Vending_maschine:number': 'Vending_maschine:number', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', });
lyr_Leyerstrae221_22.set('fieldAliases', {'fid': 'fid', 'Latitude (°)': 'Latitude (°)', 'Longitude (°)': 'Longitude (°)', 'Horizontal Accuracy (m)': 'Horizontal Accuracy (m)', 'Vertical Accuracy (°)': 'Vertical Accuracy (°)', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'Vending_maschine:type': 'Vending_maschine:type', 'Vending_maschine:number': 'Vending_maschine:number', 'Vending_maschine:Opening_Hours': 'Vending_maschine:Opening_Hours', 'Vending_maschine: location': 'Vending_maschine: location', 'Vending_maschine:Payment_methode': 'Vending_maschine:Payment_methode', });
lyr_DarmstdterHof_1.set('fieldImages', {'fid': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Floor': '', 'Vending_maschine: location': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_VolksbankKurpfalzKornmarkt_2.set('fieldImages', {'fid': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_RathausBergbahn_3.set('fieldImages', {'fid': '', 'opening_hours': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_Spty4HD_4.set('fieldImages', {'fid': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_TriplexMensa_5.set('fieldImages', {'fid': '', 'opening_hours': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_Universittsbibliothek_6.set('fieldImages', {'fid': '', 'opening_hours': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_HenschelParkhaus_7.set('fieldImages', {'fid': '', 'opening_hours': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'access': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_SparkasseHauptstrae_8.set('fieldImages', {'fid': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_VolksbanksKurpfalzHauptstrae_9.set('fieldImages', {'fid': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_AlteAnatomieHauptstrae_10.set('fieldImages', {'fid': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_Marstallhof_11.set('fieldImages', {'fid': '', 'name': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_HeidelbergerVolksbankHauptstrae_12.set('fieldImages', {'fid': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_SparkasseUniversittplatz_13.set('fieldImages', {'fid': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', });
lyr_AltstadtSBahnhof1_14.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_AltstadtSBahnhof2_15.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_Karlplatz_16.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_Universittsplatz_17.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_AmBrckentor_18.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_PeterskircheFriedrichEbertAnlage_19.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'Vending_maschine:type': '', 'Vending_maschine:number': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_FriedrichEbertAnlage48_20.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_FriedrichEbertPlatz_21.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (m)': '', 'Vending_maschine:type': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Condition': '', 'Vending_maschine:Payment_Method': '', 'Vending_maschine:number': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', });
lyr_Leyerstrae221_22.set('fieldImages', {'fid': '', 'Latitude (°)': '', 'Longitude (°)': '', 'Horizontal Accuracy (m)': '', 'Vertical Accuracy (°)': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'Vending_maschine:type': '', 'Vending_maschine:number': '', 'Vending_maschine:Opening_Hours': '', 'Vending_maschine: location': '', 'Vending_maschine:Payment_methode': '', });
lyr_DarmstdterHof_1.set('fieldLabels', {'fid': 'no label', 'addr:street': 'header label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Floor': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_VolksbankKurpfalzKornmarkt_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_RathausBergbahn_3.set('fieldLabels', {'fid': 'no label', 'opening_hours': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_Spty4HD_4.set('fieldLabels', {'fid': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_TriplexMensa_5.set('fieldLabels', {'fid': 'no label', 'opening_hours': 'inline label - visible with data', 'name': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_Universittsbibliothek_6.set('fieldLabels', {'fid': 'no label', 'opening_hours': 'inline label - visible with data', 'name': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_HenschelParkhaus_7.set('fieldLabels', {'fid': 'no label', 'opening_hours': 'inline label - visible with data', 'name': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'access': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_SparkasseHauptstrae_8.set('fieldLabels', {'fid': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_VolksbanksKurpfalzHauptstrae_9.set('fieldLabels', {'fid': 'no label', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_AlteAnatomieHauptstrae_10.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_Marstallhof_11.set('fieldLabels', {'fid': 'no label', 'name': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_HeidelbergerVolksbankHauptstrae_12.set('fieldLabels', {'fid': 'no label', 'name': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_SparkasseUniversittplatz_13.set('fieldLabels', {'fid': 'no label', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:country': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', });
lyr_AltstadtSBahnhof1_14.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_AltstadtSBahnhof2_15.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_Karlplatz_16.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_Universittsplatz_17.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_AmBrckentor_18.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_PeterskircheFriedrichEbertAnlage_19.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_FriedrichEbertAnlage48_20.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_FriedrichEbertPlatz_21.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (m)': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Condition': 'inline label - visible with data', 'Vending_maschine:Payment_Method': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', });
lyr_Leyerstrae221_22.set('fieldLabels', {'fid': 'no label', 'Latitude (°)': 'inline label - visible with data', 'Longitude (°)': 'inline label - visible with data', 'Horizontal Accuracy (m)': 'inline label - visible with data', 'Vertical Accuracy (°)': 'inline label - visible with data', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'addr:city': 'inline label - visible with data', 'Vending_maschine:type': 'inline label - visible with data', 'Vending_maschine:number': 'inline label - visible with data', 'Vending_maschine:Opening_Hours': 'inline label - visible with data', 'Vending_maschine: location': 'inline label - visible with data', 'Vending_maschine:Payment_methode': 'inline label - visible with data', });
lyr_Leyerstrae221_22.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});