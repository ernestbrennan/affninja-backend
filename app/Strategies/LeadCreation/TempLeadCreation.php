<?php
declare(strict_types=1);

namespace App\Strategies\LeadCreation;

use App\Classes\DeviceInspector;
use App\Classes\PhoneInspector;
use App\Models\{
    Lead, Order, TargetGeo, TempLead
};

class TempLeadCreation
{
    private $phone_inspector;
    private $device_inspector;
    private $phone_info;
    private $temp_lead;

    public function __construct(PhoneInspector $phone_inspector, DeviceInspector $device_inspector)
    {
        $this->phone_inspector = $phone_inspector;
        $this->device_inspector = $device_inspector;
    }

    public function handle(TempLead $temp_lead)
    {
        $this->temp_lead = $temp_lead;

        $this->phone_info = $this->phone_inspector->checkValid($this->temp_lead->phone, $this->temp_lead->target_geo->country->code);

        $order = $this->insertOrder();
        return $this->insertLead($order);
    }

    public function insertOrder()
    {
        return (new Order())->createNew([
            'name' => $this->temp_lead->name,
            'phone' => $this->temp_lead->phone,
            'info' => '{}',
            'comment' => $this->temp_lead->comment,
            'products' => $this->temp_lead->products,
            'number_type_id' => $this->phone_info['number_type'],
            'history' => json_encode([[
                'date' => time(),
                'name' => $this->temp_lead->name,
                'origin_phone' => $this->temp_lead->phone,
                'phone' => $this->temp_lead->phone,
            ]])
        ]);
    }

    public function insertLead(Order $order): Lead
    {
        $device_info = $this->device_inspector->getDeviceIdentifiers($this->temp_lead->user_agent);

        $target_geo = (new TargetGeo())->getByHash(
            $this->temp_lead->target_geo['hash'],
            ['country'],
            $this->temp_lead->flow['publisher_id']
        );

        return (new Lead())->createNew([
            'domain_id' => $this->temp_lead->domain_id,
            'offer_id' => $this->temp_lead->flow->offer->id,
            'target_id' => $this->temp_lead->flow->target_id,
            'target_geo_id' => $this->temp_lead->target_geo_id,
            'country_id' => $this->temp_lead->target_geo->country->id,
            'region_id' => $this->temp_lead->region_id,
            'city_id' => $this->temp_lead->city_id,
            'publisher_id' => $this->temp_lead->flow->publisher_id,
            'landing_id' => $this->temp_lead->landing_id,
            'transit_id' => $this->temp_lead->transit_id,
            'locale_id' => $this->temp_lead->landing->locale_id,
            'flow_id' => $this->temp_lead->flow->id,
            'order_id' => $order['id'],
            'payout' => $target_geo['payout'],
            'price' => $target_geo['price'],
            'currency_id' => $this->temp_lead->target_geo->payout_currency_id,
            'origin' => Lead::WEB_ORIGIN,
            'type' => Lead::COD_TYPE,
            'status' => Lead::NEW,
            'initialized_at' => $this->temp_lead->initialized_at,
            'is_valid_phone' => 1,
            's_id' => $this->temp_lead->s_id,
            'ip' => $this->temp_lead->ip,
            'ip_country_id' => $this->temp_lead->ip_country_id,
            'user_agent' => $this->temp_lead->user_agent,
            'data1' => $this->temp_lead->data1,
            'data2' => $this->temp_lead->data2,
            'data3' => $this->temp_lead->data3,
            'data4' => $this->temp_lead->data4,
            'clickid' => $this->temp_lead->clickid,
            'referer' => $this->temp_lead->referer,
            'browser_id' => $device_info['browser_id'],
            'os_platform_id' => $device_info['os_platform_id'],
            'device_type_id' => $device_info['device_type_id'],
            'is_extra_flow' => $this->temp_lead->is_extra_flow,
            'transit_traffic_type' => $this->temp_lead->transit_traffic_type,
            'browser_locale' => $this->temp_lead->browser_locale,
            'ips' => $this->temp_lead->ips,
            'is_autogenerated' => 1
        ]);
    }
}