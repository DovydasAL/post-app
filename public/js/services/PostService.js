angular.module('PostService', []).factory('Post', ['$http', function($http) {
    return {
        get : function() {
            return $http.get('/api/post');
        },

        create : function(post) {
            return $http.post('/api/post', post);
        },

        delete : function(postId) {
            return $http.delete('/api/post/' + postId);
        }
    }

}]);