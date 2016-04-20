var app = angular.module('demo', ['ui.router']);

app.controller('DemoController', [
    '$scope',
    'posts',
    function($scope, posts) {
        $scope.test = 'Hello world!';

        $scope.post = [
            'post 1',
            'post 2',
            'post 3',
            'post 4',
            'post 5'
        ];



        $scope.addPost = function() {
            if (!$scope.title || $scope.title === '') {
                return;
            }
            $scope.posts.push({
                title: $scope.title,
                link: $scope.link,
                upvotes: 0
            });
            $scope.title = '';
            $scope.link = '';
        };

        $scope.incrementUpvotes = function(post) {
            post.upvotes += 1;
        };

        $scope.posts = posts.posts;
    }
]);

app.factory('posts', [function() {
    var o = {
        posts: [
            { title: 'post 1', upvotes: 5 },
            { title: 'post 2', upvotes: 2 },
            { title: 'post 3', upvotes: 15 },
            { title: 'post 4', upvotes: 9 },
            { title: 'post 5', upvotes: 4 }
        ]
    };
    return o;
}]);
