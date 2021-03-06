<?php
declare(strict_types=1);

namespace App\Services\Cloaking\Ms;

use App\Services\Cloaking\StdClassProxy;
use stdClass;

class MSURL extends StdClassProxy
{
    final public static function Relative2Root($path, $base_path)
    {
        if ('.' === iconv_substr($path, 0, 1, 'utf-8') && preg_match('#^(\.\.?\/)+#', $path, $m)) {
            $i = array_filter(explode('/', $m[0]), function ($v) {
                return $v !== '.' && $v !== '';
            });
            $path = iconv_substr($path, iconv_strlen($m[0], 'utf-8') - 1, 1, 'utf-8');
            if ($i) {
                for ($j = count($i); $j >= 0; --$j)
                    if (false === ($pos = iconv_strrpos($base_path, '/', 'utf-8'))) break;
                    else $base_path = iconv_substr($base_path, 0, $pos, 'utf-8');
                return $base_path . $path;
            }
        } else {
            $path = "/$path";
        }

        return false === ($pos = iconv_strrpos($base_path, '/', 'utf-8')) ? $path : iconv_substr($base_path, 0, $pos, 'utf-8') . $path;
    }

    final public static function URLToString(stdClass $url)
    {
        $s = '';
        if ('' !== $url->scheme) $s .= "$url->scheme:";
        if ('' !== $url->host) {
            $s .= '//';
            if ('' !== $url->user) {
                $s .= $url->user;
                if ($url->pass) $s .= ":$url->pass";
                $s .= '@';
            }
            $s .= $url->host;
            if ($url->port) $s .= ":$url->port";
        }
        $s .= $url->path;
        if ('' !== $url->query) $s .= "?$url->query";
        if ('' !== $url->fragment) $s .= "#$url->fragment";
        return $s;
    }

    final public static function IsSubdomainOf($labels, $domain_0, $domain_1 = 'HTTP_HOST', &$label = '')
    {
        $r = self::IsSubdomain($domain_0, $domain_1, $label);
        return $r && $labels === $label ? $r : false;
    }

    final public static function IsSubdomain($domain_0, $domain_1 = 'HTTP_HOST', &$label = '')
    {
        $d = [new stdClass, new stdClass];
        foreach ($d as $i => $v) {
            $v->val = "${"domain_$i"}";
            if (!$v->val) throw new UnexpectedValueException('Domain name can not be empty');
            if ('HTTP_HOST' === $v->val) $v->val = $_SERVER['HTTP_HOST'];
            $v->len = iconv_strlen($v->val, 'utf-8');
        }
        $label = '';
        if ($d[0]->val === $d[1]->val) return 0;
        if ($d[0]->len === $d[1]->len) return false;
        $i = $d[0]->len < $d[1]->len;
        $d[!$i]->val = '.' . $d[!$i]->val;
        ++$d[!$i]->len;
        if (0 === substr_compare($d[$i]->val, $d[!$i]->val, -$d[!$i]->len)) {
            $label = iconv_substr($d[$i]->val, 0, -$d[!$i]->len, 'utf-8');
            return 1 - 2 * $i;
        }
        return false;
    }

    final public static function ToggleSubdomain($label, $domain = 'HTTP_HOST')
    {
        if (!$domain) throw new UnexpectedValueException('Domain name can not be empty');
        if ('HTTP_HOST' === $domain) $domain = $_SERVER['HTTP_HOST'];
        $label .= '.';
        $pos = iconv_strpos($domain, $label, 0, 'utf-8');
        if (false === $pos) return $label . $domain;
        elseif (0 === $pos) return iconv_substr($domain, iconv_strlen($label, 'utf-8'), iconv_strlen($domain, 'utf-8'), 'utf-8');
    }

    final public function __construct($raw_value, MSURL $base_url = null)
    {
        $this->url = new stdClass;
        if ($raw_value instanceof stdClass) {
            $this->url->raw_value = self::URLToString($raw_value);
            foreach (self::$components as $k => $v) $this->url->$k = $raw_value->$k;
        } else {
            $this->url->raw_value = "$raw_value";
            if ('#' === $this->url->raw_value) $this->url->raw_value = '';
            $raw_value = parse_url($this->url->raw_value);
            if (!$raw_value) throw new UnexpectedValueException('Invalid value: ' . MSConfig::GetVarType($this->url->raw_value));
            foreach (self::$components as $k => $v) $this->url->$k = isset($raw_value[$k]) ? $raw_value[$k] : '';
        }
        $url = clone $this->url;
        if ('' === $url->scheme) {
            if (null === $base_url) throw new Exception('Scheme undefined');
            $url->scheme = $base_url->scheme;
            if ('' === $url->host) {
                $url->host = $base_url->host;
                if ('' === $url->path) $url->path = $base_url->path;
                elseif ('/' !== iconv_substr($url->path, 0, 1, 'utf-8')) $url->path = $this->Relative2Root($url->path, $base_url->path);
            } elseif ('' === $url->path) $url->path = '/';
        } elseif ('' === $url->host) ;
        elseif ('' === $url->path) $url->path = '/';
        parent::__construct($url);
        $this->base_url = $base_url;
    }

    public function __clone()
    {
        throw new Exception('can not clone');// ?????????? ???????????? ???????? "????????????????????????" ?? ?????????????????? ??????????, ???????? ?????????? ?????????????????????? ???????????? ??????????????????.
    }

    final public function Crop($c1, $c2 = null)
    {
        foreach (['c1', 'c2'] as $i) if ($$i && !$this->CheckComponentName($$i, $e_msg)) throw new Exception($e_msg);
        if ($c1 === $c2) throw new Exception('Arguments should not be equal. Use $url->' . ($c1 ?: '__toString()') . ' instead.');
        $r = new stdClass;
        $stop = (bool)$c1;
        foreach (self::$components as $k => $v) {
            if ($k === $c2) $stop = true;
            $r->$k = $stop ? '' : $this->$k;
            if ($k === $c1) $stop = false;
        }
        return $this->URLToString($r);
    }

    final public function IsAbsolute(&$type = null)
    {
        if ('' === $this->url->scheme) {
            if ('' === $this->url->host) {
                $type = '' === $this->url->path || '/' !== iconv_substr($this->url->path, 0, 1, 'utf-8') ? 'relative' : 'root-relative';
                return false;
            } else $type = 'protocol-relative';
        } else $type = 'absolute';
        return true;
    }

    final public function GetType()
    {
        $this->IsAbsolute($type);
        return $type;
    }

    final public function GetComponents($callback = null)
    {
        $r = new stdClass;
        if ($callback) foreach (self::$components as $k => $v) $r->$k = call_user_func($callback, $k, $this->$k, $this);
        else foreach (self::$components as $k => $v) $r->$k = $this->$k;
        return $r;
    }

    final public function ToArray()
    {
        $r = [];
        foreach (self::$components as $k => $v) $r[$k] = $this->$k;
        return $r;
    }

    final public function GetBaseURL()
    {
        return $this->base_url;
    }

    final public function __toString()
    {
        return $this->URLToString($this);
    }

    final protected static function CheckComponentName($name, &$e_msg = null)
    {
        $e_msg = ($r = isset(self::$components[$name])) ? null : "Invalid component: $name. Allowed components are: " . implode(', ', array_keys(self::$components)) . '.';
        return $r;
    }

    private $url;
    private $base_url;

    private static $components = ['scheme' => true, 'host' => true, 'port' => true, 'user' => true, 'pass' => true, 'path' => true, 'query' => true, 'fragment' => true];
}

