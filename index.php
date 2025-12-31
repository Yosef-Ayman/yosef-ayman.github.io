<?php
require_once 'data/project.php';
$projects = getProjects();
?>
<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

  <section class="hero">
    <div class="container">
      <div class="about">
          <p class="intro">Hi, I'm</p>
          <h1>Yosef Ayman</h1>
          <h2>Sophomore at Cairo University | Faculty of Computers & AI</h2>

          <p class="bio">
            Passionate about Competitive Programming, Web Development, Algorithms &
            Problem Solving. Currently pursuing a Bachelor's in Computers &
            Artificial Intelligence at Cairo University.
          </p>

          <p class="location">📍 Giza, Egypt</p>

          <div class="buttons">
            <a href="projects.php" class="btn primary">View Projects</a>
            <a href="experience.php" class="btn outline">My Experience</a>
          </div>
      </div>
      <div class="photo">
          <img src="Yosef.jpg" alt="Yosef's photo" loading="lazy">
      </div>
    </div>
  </section>

  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">Featured Projects</h2>

      <div class="projects-grid">
      <?php
      $featuredIds = ['simple-audio-player', 'tic-tac-toe', 'image-processing', 'frontend-mentor'];
      foreach ($featuredIds as $id) {
          if (isset($projects[$id])) {
              $project = $projects[$id];
              ?>
              <div class="project-card">
                <h3><?php echo htmlspecialchars($project['title']); ?></h3>
                <p>
                  <?php echo htmlspecialchars($project['short_desc']); ?>
                </p>

                <div class="tags">
                  <?php foreach ($project['technologies'] as $tag): ?>
                    <span><?php echo htmlspecialchars($tag); ?></span>
                  <?php endforeach; ?>
                </div>

                <a href="project.php?id=<?php echo urlencode($id); ?>" class="btn outline">View Details</a>
              </div>
              <?php
          }
      }
      ?>
      </div>
    </div>
  </section>

<?php include 'includes/footer.php'; ?>