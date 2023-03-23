getArticles(20, (user) => {
  console.log("Fetch articles", user);
  getUserData(user.username, (name) => {
    console.log(name);
    getAddress(name, (item) => {
      console.log(item);
      // this goes on and on...
    }
)})});


getUser(1, (user) => {
  console.log("User", user);
  getRepositories(user.githubUsername, (repos) => {
    console.log(repos);
    getCommits(repos[0], (commits) => {
      console.log(commits);
      // Callback Hell ("-_-)
    }
})}