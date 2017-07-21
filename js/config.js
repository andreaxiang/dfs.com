
(function(){//动态取得JS路径
	var jsFiles = document.scripts;
	var currentPath = jsFiles[jsFiles.length-1].src;
	currentPath = currentPath.replace(/\/+/,'/');
	if(currentPath.indexOf(document.location.protocol) !== 0 && currentPath.indexOf('/') !== 0){
		//使用的相对目录
		baseUri = document.URL.replace(/\/+/,'/').split('/');
		baseUri.splice(baseUri.length-1,1);
		var currentPathSplit = currentPath.split('/');
		currentPathSplit.splice(currentPathSplit.length-1,1);
		var i=0;
		for(;i<currentPathSplit.length;i++){
			if(currentPathSplit[i] != '..'){
				break;
			}
			baseUri.splice(baseUri.length-1,1);
		}
		currentPathSplit.splice(0,i);
		currentPath = baseUri.join('/');
		if(currentPathSplit.length>0){
			currentPath = currentPath + '/' + currentPathSplit.join('/');
		}
	}else if(currentPath.indexOf('/') === 0){
		currentPath = currentPath.split('/');
		currentPath.splice(currentPath.length-1,1);
		currentPath = (document.location.protocol+'//'+document.location.host)+currentPath.join('/');
	}
	baseUri = currentPath.substring((document.location.protocol+'//'+document.location.host).length);
	baseUri = baseUri.replace(/\/+/,'/');
	baseUri = baseUri.split('/');
	if(baseUri[baseUri.length-1].indexOf('.') > -1){
		baseUri.splice(baseUri.length-1,1);
	}
	baseUri = '/'+baseUri.join('/')+'/';
	baseUri = baseUri.replace(/\/\//g,'/');
})();
		seajs.config({
			base:baseUri,
			alias: {
				'jquery': 'jquery/jquery_v2.1.1/jquery.min.js',
				'swiper': 'public/swiper/swiper.min.js'
			},
		});
				
