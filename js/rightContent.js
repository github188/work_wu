var city=angular.module('city',[]);
city.controller('cityCtrl',function($scope,$http){
    //鼠标悬停出现协议信息
    $scope.isclass=true;
    $scope.mov=function(){
        $scope.isclass=false;
    };
    $scope.out=function(){
    		$scope.isclass=true;
    };
    //协议后台数据获取，返回值为msgdata
    $http.get("test.json").success(function(msgdata){          //test.json为假数据
    			 $scope.msgs=msgdata.msg;
    });
});

city.directive('pageFlide',function(){		//页码翻页
	return {
		restrict:'E',
		templateUrl:'temp/pageflide.html',
		replace:true,
		
	};
})
city.directive('tab',function(){				//批量发货列表
	return {
		restrict:'E',
		templateUrl:'temp/tab.html',
		replace:true,
		
	}
});
