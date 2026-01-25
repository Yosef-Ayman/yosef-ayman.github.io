export function getFooter() {
    const currentYear = new Date().getFullYear();
    return `<footer class="site-footer">
    <div class="container footer-content">

        <div class="logo"><a href="index.html">YA</a></div>

        <nav class="footer-links">
            <a href="https://github.com/Yosef-Ayman" target="_blank" aria-label="GitHub">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://linkedin.com/in/yosef-ayman" target="_blank" aria-label="LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
            </a>

<!--            <a href="mailto:your-email@gmail.com" aria-label="Email">-->
<!--                <i class="fa-solid fa-envelope"></i>-->
<!--            </a>-->

            <a href="https://discord.com/users/1288465534945464424" target="_blank" aria-label="Discord">
                <i class="fa-brands fa-discord"></i>
            </a>

            <a href="https://facebook.com/profile.php?id=100058102656981" target="_blank" aria-label="Facebook">
                <i class="fa-brands fa-facebook"></i>
            </a>

            <a href="https://instagram.com/yosef__ayman" target="_blank" aria-label="Instagram">
                <i class="fa-brands fa-instagram"></i>
            </a>

        </nav>

    </div>

    <div class="footer-bottom">
        © ${currentYear} Yosef Ayman. All Rights Reserved.
    </div>
</footer>

</body>
</html>`;
}