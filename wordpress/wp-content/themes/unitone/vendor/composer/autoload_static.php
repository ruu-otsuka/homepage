<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitbacfa43f1abf21d4e050cda8be9cea60
{
    public static $prefixLengthsPsr4 = array (
        'U' => 
        array (
            'Unitone\\' => 8,
        ),
        'I' => 
        array (
            'Inc2734\\WP_OEmbed_Blog_Card\\' => 28,
            'Inc2734\\WP_GitHub_Theme_Updater\\' => 32,
            'Inc2734\\WP_Breadcrumbs\\' => 23,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Unitone\\' => 
        array (
            0 => __DIR__ . '/../..' . '/',
        ),
        'Inc2734\\WP_OEmbed_Blog_Card\\' => 
        array (
            0 => __DIR__ . '/..' . '/inc2734/wp-oembed-blog-card/src',
        ),
        'Inc2734\\WP_GitHub_Theme_Updater\\' => 
        array (
            0 => __DIR__ . '/..' . '/inc2734/wp-github-theme-updater/src',
        ),
        'Inc2734\\WP_Breadcrumbs\\' => 
        array (
            0 => __DIR__ . '/..' . '/inc2734/wp-breadcrumbs/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitbacfa43f1abf21d4e050cda8be9cea60::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitbacfa43f1abf21d4e050cda8be9cea60::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitbacfa43f1abf21d4e050cda8be9cea60::$classMap;

        }, null, ClassLoader::class);
    }
}