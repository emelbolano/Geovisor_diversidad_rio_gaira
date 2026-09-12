ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8265327.928660, 1238539.691273, -8237811.789943, 1262287.051049]);
var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CuencadelroGaira_1 = new ol.format.GeoJSON();
var features_CuencadelroGaira_1 = format_CuencadelroGaira_1.readFeatures(json_CuencadelroGaira_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencadelroGaira_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencadelroGaira_1.addFeatures(features_CuencadelroGaira_1);
var lyr_CuencadelroGaira_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencadelroGaira_1, 
                style: style_CuencadelroGaira_1,
                popuplayertitle: 'Cuenca del río Gaira',
                interactive: true,
                title: '<img src="styles/legend/CuencadelroGaira_1.png" /> Cuenca del río Gaira'
            });
var format_Diversidad_2 = new ol.format.GeoJSON();
var features_Diversidad_2 = format_Diversidad_2.readFeatures(json_Diversidad_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Diversidad_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Diversidad_2.addFeatures(features_Diversidad_2);
var lyr_Diversidad_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Diversidad_2, 
                style: style_Diversidad_2,
                popuplayertitle: 'Diversidad',
                interactive: true,
    title: 'Diversidad<br />\
    <img src="styles/legend/Diversidad_2_0.png" /> 0<br />\
    <img src="styles/legend/Diversidad_2_1.png" /> 1 - 41<br />\
    <img src="styles/legend/Diversidad_2_2.png" /> 41 - 134<br />\
    <img src="styles/legend/Diversidad_2_3.png" /> 134 - 344<br />\
    <img src="styles/legend/Diversidad_2_4.png" /> 344 - 489<br />' });
var format_Drenajes_3 = new ol.format.GeoJSON();
var features_Drenajes_3 = format_Drenajes_3.readFeatures(json_Drenajes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenajes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenajes_3.addFeatures(features_Drenajes_3);
var lyr_Drenajes_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenajes_3, 
                style: style_Drenajes_3,
                popuplayertitle: 'Drenajes',
                interactive: true,
                title: '<img src="styles/legend/Drenajes_3.png" /> Drenajes'
            });
var format_Especies_4 = new ol.format.GeoJSON();
var features_Especies_4 = format_Especies_4.readFeatures(json_Especies_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Especies_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Especies_4.addFeatures(features_Especies_4);
var lyr_Especies_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Especies_4,
maxResolution:7.00111653806549,
 
                style: style_Especies_4,
                popuplayertitle: 'Especies',
                interactive: true,
                title: '<img src="styles/legend/Especies_4.png" /> Especies'
            });

lyr_ESRITopo_0.setVisible(true);lyr_CuencadelroGaira_1.setVisible(true);lyr_Diversidad_2.setVisible(true);lyr_Drenajes_3.setVisible(true);lyr_Especies_4.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_CuencadelroGaira_1,lyr_Diversidad_2,lyr_Drenajes_3,lyr_Especies_4];
lyr_CuencadelroGaira_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'fid_2': 'fid_2', 'DN_2': 'DN_2', 'fid_3': 'fid_3', 'DN_3': 'DN_3', 'fid_4': 'fid_4', 'DN_4': 'DN_4', 'Area_Ha': 'Area_Ha', });
lyr_Diversidad_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GRID_ID': 'GRID_ID', 'Numero_Registros': 'Count of Points', 'Join_ID': 'JOIN ID', 'OBJECTID_1': 'OBJECTID', 'Join_ID_1': 'Join ID', 'Riqueza': 'FREQUENCY', 'COUNT_Point_Count': 'COUNT_Point_Count', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', 'Riqueza_especies': 'Riqueza_especies', 'Num_registros': 'Num_registros', });
lyr_Drenajes_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE_GEO': 'NOMBRE_GEO', 'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'Shape_Leng': 'Shape_Leng', 'Shape_Length': 'Shape_Length', 'Longitud_KM': 'Longitud_KM', });
lyr_Especies_4.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'order_': 'order', 'family': 'family', 'genus': 'genus', 'species': 'species', 'Imagen': 'Imagen', });
lyr_CuencadelroGaira_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', 'fid_2': 'TextEdit', 'DN_2': 'Range', 'fid_3': 'TextEdit', 'DN_3': 'Range', 'fid_4': 'TextEdit', 'DN_4': 'Range', 'Area_Ha': 'TextEdit', });
lyr_Diversidad_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'GRID_ID': 'TextEdit', 'Numero_Registros': 'Range', 'Join_ID': 'Range', 'OBJECTID_1': 'Range', 'Join_ID_1': 'Range', 'Riqueza': 'Range', 'COUNT_Point_Count': 'Range', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', 'Riqueza_especies': 'Range', 'Num_registros': 'Range', });
lyr_Drenajes_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'ESTADO_DRE': 'Range', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Length': 'TextEdit', 'Longitud_KM': 'TextEdit', });
lyr_Especies_4.set('fieldImages', {'fid': 'TextEdit', 'class': 'TextEdit', 'order_': 'TextEdit', 'family': 'TextEdit', 'genus': 'TextEdit', 'species': 'TextEdit', 'Imagen': 'TextEdit', });
lyr_CuencadelroGaira_1.set('fieldLabels', {'fid': 'hidden field', 'DN': 'hidden field', 'fid_2': 'hidden field', 'DN_2': 'hidden field', 'fid_3': 'hidden field', 'DN_3': 'hidden field', 'fid_4': 'hidden field', 'DN_4': 'hidden field', 'Area_Ha': 'inline label - visible with data', });
lyr_Diversidad_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'GRID_ID': 'hidden field', 'Numero_Registros': 'hidden field', 'Join_ID': 'hidden field', 'OBJECTID_1': 'hidden field', 'Join_ID_1': 'hidden field', 'Riqueza': 'hidden field', 'COUNT_Point_Count': 'hidden field', 'Shape_Length': 'hidden field', 'Shape_Area': 'hidden field', 'Riqueza_especies': 'inline label - visible with data', 'Num_registros': 'inline label - visible with data', });
lyr_Drenajes_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'NOMBRE_GEO': 'hidden field', 'ESTADO_DRE': 'hidden field', 'PROYECTO': 'hidden field', 'SYMBOL': 'hidden field', 'FECHA': 'hidden field', 'DISPERSION': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Length': 'hidden field', 'Longitud_KM': 'inline label - visible with data', });
lyr_Especies_4.set('fieldLabels', {'fid': 'hidden field', 'class': 'inline label - visible with data', 'order_': 'hidden field', 'family': 'hidden field', 'genus': 'hidden field', 'species': 'inline label - visible with data', 'Imagen': 'no label', });
lyr_Especies_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});