<?php
require_once 'data/project.php';

$projectId = isset($_GET['id']) ? trim($_GET['id']) : '';
$projectId = htmlspecialchars($projectId, ENT_QUOTES, 'UTF-8');

$projects = getProjects();

$project = null;
if (!empty($projectId) && isset($projects[$projectId])) {
    $project = $projects[$projectId];
}
?>
<?php
$fmProjects = require 'data/frontend_mentor.php';

$techIcons = [
    'html' => 'fab fa-html5',
    'css'  => 'fab fa-css3-alt',
    'js'   => 'fab fa-js',
    'php'  => 'fab fa-php'
];
?>
<?php include 'includes/header.php'; ?>
<?php include 'includes/navbar.php'; ?>

<?php if ($project): ?>
    <div class="project-page">
        <div class="project-hero">
            <h1><?php echo htmlspecialchars($project['title']); ?></h1>
            <div class="project-meta"><?php echo htmlspecialchars($project['short_desc']); ?></div>
            <p class="project-summary"><?php echo htmlspecialchars($project['about']); ?></p>
        </div>
        
        <div class="card">
            <h3>About the Project</h3>
            <p style="color: #9ca3af; line-height: 1.7;"><?php echo htmlspecialchars($project['about']); ?></p>
        </div>
        
        <section class="features">
            <h2 class="section-title">Features</h2>
            <div class="features-grid">
                <?php foreach ($project['features'] as $feature): ?>
                    <div class="feature-card">
                        <?php echo htmlspecialchars($feature); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
        
        <section class="technologies">
            <h2 class="section-title">Technologies</h2>
            <div class="tech-list">
                <?php foreach ($project['technologies'] as $tech): ?>
                    <span><?php echo htmlspecialchars($tech); ?></span>
                <?php endforeach; ?>
            </div>
        </section>
        
        <?php if (isset($project['highlights']) && !empty($project['highlights'])): ?>
        <section class="highlights">
            <h2 class="section-title">Project Highlights</h2>
            <ul>
                <?php foreach ($project['highlights'] as $highlight): ?>
                    <li><?php echo htmlspecialchars($highlight); ?></li>
                <?php endforeach; ?>
            </ul>
        </section>
        <?php endif; ?>

        <?php if ($projectId === 'frontend-mentor') { ?>
            <section class="fm-challenges-grid" id="challenges-grid">
                <?php foreach ($fmProjects as $i => $p): ?>
                    <article class="fm-card fm-card-visible" data-tech="<?= htmlspecialchars(implode(',', $p['fm_meta'])) ?>" style="animation-delay: <?= ($i*0.05) ?>s">
                        <div class="fm-card-thumbnail">
                            <img src="https://image.thum.io/get/<?= htmlspecialchars($p['live']) ?>" alt="<?= htmlspecialchars($p['fm_title']) ?>" loading="lazy">
                            <div class="fm-card-overlay">
                                <a href="<?= htmlspecialchars($p['live']) ?>" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-live">
                                    <i class="fas fa-external-link-alt"></i> Live Preview
                                </a>
                                <a href="<?= htmlspecialchars($p['github']) ?>" target="_blank" rel="noopener noreferrer" class="fm-overlay-btn fm-btn-source">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                        <div class="fm-card-content">
                            <h3 class="fm-card-title"><?= htmlspecialchars($p['fm_title']) ?></h3>
                            <div class="fm-card-meta">
                                <div class="fm-tech-icons">
                                    <?php foreach ($p['fm_meta'] as $tech): ?>
                                        <?php if (isset($techIcons[$tech])): ?>
                                            <i class="<?= $techIcons[$tech] ?>"></i>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                </div>
                            </div>
                        </div>
                    </article>
                <?php endforeach; ?>
            </section>

        <?php } ?>

        <div class="center-btn">
            <a href="<?php echo htmlspecialchars($project['github']); ?>" target="_blank" rel="noopener noreferrer" class="btn primary">View on GitHub</a>
            <?php if (!empty($project['live'])): ?>
                <a href="<?php echo htmlspecialchars($project['live']); ?>" target="_blank" rel="noopener noreferrer" class="btn outline" style="margin-left: 16px;">Live Preview</a>
            <?php endif; ?>
        </div>
    </div>
<?php else: ?>
    <section class="project-detail-page">
        <div class="container">
            <div class="error-message">
                <h1 class="page-title">Project Not Found</h1>
                <p>The project you're looking for doesn't exist or has been removed.</p>
                <a href="projects.php" class="btn btn-primary">Back to Projects</a>
            </div>
        </div>
    </section>
<?php endif; ?>
<?php include 'includes/footer.php'; ?>