<?php
require_once 'data/project.php';
$projects = getProjects();
?>
<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

<section class="projects-page">
    <div class="container">
        <h1 class="page-title">My Projects</h1>
        <p class="page-intro">
            A collection of C++ projects showcasing my skills in software engineering, 
            object-oriented programming, algorithms, and problem-solving.
        </p>
        
        <div class="projects-grid">
            <?php foreach ($projects as $id => $project): ?>
                <div class="project-card">
                    <h3 class="project-title"><?php echo htmlspecialchars($project['title']); ?></h3>
                    <p class="project-description"><?php echo htmlspecialchars($project['short_desc']); ?></p>
                    <div class="project-tags">
                        <?php foreach ($project['technologies'] as $tag): ?>
                            <span class="tag"><?php echo htmlspecialchars($tag); ?></span>
                        <?php endforeach; ?>
                    </div>
                    <div class="project-buttons">
                        <a href="project.php?id=<?php echo urlencode($id); ?>" class="btn btn-outline">View Details</a>
                        <a href="<?php echo htmlspecialchars($project['github']); ?>" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php include 'includes/footer.php'; ?>