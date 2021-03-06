<?php

namespace Phpsw\Website\Tests\Importer\EntityImporter;

use Phpsw\Website\Entity\Location;
use Phpsw\Website\Importer\EntityImporter\Form\LocationTransformer;
use Phpsw\Website\Repository\InMemory\LocationRepository;
use PHPUnit\Framework\TestCase;

/**
 * Tests AbstractEntityTransformer using LocationTransformer concrete implementation.
 */
class EntityTransformerTest extends TestCase
{
    const LOCATION = 'location-1';
    const INVALID_SLUG = 'invalid-slug';

    /**
     * @var Location
     */
    private $location;

    /**
     * @var LocationTransformer
     */
    private $locationTransformer;

    public function setUp()
    {
        $locationRepository = new LocationRepository();
        $this->location = new Location();
        $this->location->setSlug(self::LOCATION);
        $locationRepository->persist($this->location);
        $this->locationTransformer = new LocationTransformer($locationRepository);
    }

    public function testTransformEmptyData()
    {
        $actual = $this->locationTransformer->transform(null);
        $this->assertNull($actual);
    }

    public function testTransformData()
    {
        $actual = $this->locationTransformer->transform($this->location);
        $this->assertEquals(self::LOCATION, $actual);
    }

    public function testReverseTransformData()
    {
        $actual = $this->locationTransformer->reverseTransform(self::LOCATION);
        $this->assertEquals($this->location, $actual);
    }

    public function testInvalidSlug()
    {
        $actual = $this->locationTransformer->reverseTransform(self::INVALID_SLUG);
        $this->assertNull($actual);
    }
}
