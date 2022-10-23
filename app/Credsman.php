<?php

declare(strict_types=1);

namespace App;

use DateTime;

class Credsman
{
    const VERSION = '0.1.0';

    public static function getCopyright(): string
    {
        $copyright = (new DateTime())->format('Y');

        if ($copyright !== '2022') {
            $copyright = "2022-{$copyright}";
        }

        return $copyright;
    }
}
