const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
        
      <main>
        <h1>HOME</h1>
        <div>
          <img
            src="/images/taylor-kiser-unsplash.jpg" width="300px" margin="auto"
            
            alt="Muffas"
          />
          <div>
          Photo by <a href="https://unsplash.com/@foodfaithfit?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Taylor Kiser</a> on <a href="https://unsplash.com/s/photos/free-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>
      </main>
    </Def>
  );
}

module.exports = home;
