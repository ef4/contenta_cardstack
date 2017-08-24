# Contenta Demo using Cardstack

This is a demonstration of how to build an app around [Contenta](http://www.contentacms.org/)) using [Cardstack](https://github.com/cardstack/cardstack).

## Prerequisites

Cardstack is moving toward a fully Dockerized architecture that will reduce this prerequisites list, but here's what you'll need to run it today:

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](http://yarnpkg.com/)
* [Ember CLI](https://ember-cli.com/)
* [Docker](https://www.docker.com/)

In addition, you will need to have read-write access to a Contenta site. You can either follow the instructions on http://www.contentacms.org/ or try a Docker-based setup like https://github.com/ef4/contenta_docker

## Installation

### Get the necessary Code

* Clone the Contenta Cardstack repo with ``git clone https://github.com/ef4/contenta_cardstack``
* Install Contenta Cardstack dependencies
    * ``cd contenta_cardstack``
    * ``yarn install`` 
* Clone Contenta Docker with ``git clone https://github.com/ef4/contenta_docker``

### Build Contenta Docker
It's probably a very good idea to ensure that any other development servers you might be running are off during this initial provision to avoid any networking conflicts or other inexplicable strangeness. 
* Change directory into the contenta_docker repository, wherever you cloned it.
* ``docker compose build``
* ``docker compose up`` (Alternatively, use ``docker composer up -d``to avoid having your terminal session taken over.)
* Install Drupal with ``docker exec contentadocker_php_1 init-drupal``
* Copy and paste the login URL you are presented with and log in to Drupal
* Create password for your Drupal account.  You will be needing this later.
* Ensure that your Drupal user has the admin role

### Set up Oauth

* While still logged in to Drupal, visit ``/admin/config/people/simple_oauth``
* Add token expiration time values (access and refresh) to a very large number (Something like 30000000 would do).
* Public key ``/var/www/public.key``
* private Key ``/var/www/private.key``
* Implicit Grant ENABLE
* Save Configuration
* Click ADD CLIENT
* Label ``Cardstack``
* New Secret - enter a new secret, and take note of it.  You will be needing it later
* Scopes - Check Administrator
* Hit save

### Create Oauth Token
Use this curl command (or other REST Client) to retreive the Oauth token from Drupal (You may need to remove the line breaks):

``
curl -X POST \
  http://localhost/oauth/token \
  -H ‘cache-control: no-cache’ \
  -H ‘content-type: application/x-www-form-urlencoded’ \
  -d ‘client_id=<clientID>&client_secret=<secret>&grant_type=password&username=admin&password=<admin_password>’
``
In the ``client_id`` section, you will need to set the following values:

* client ID: uuid seen on ```/admin/config/people/simple_oauth/oauth2_client```
* secret: The secret set on the Oauch client.
* admin_password: The passsword for the Drupal admin user.

 For example:
``client_id=f2a9c03e-421b-477b-af10-e272c1771732&client_secret=the%20cardstack%20password&grant_type=password&username=admin&password=test``

This will return access and refresh tokens - You will want to retain the access token for the next steps.

### Install Elasticsearch Container
** ``docker run -d -p 9200:9200 cardstack/elasticsearch:dev``

### Configure Cardstack
* Change directory into contenta_cardstack project
* ``cd cardstack/seeds/development``
* edit ``drupal-auth.js``
* set clientId and client secret from above values
* edit ``drupal.js``
* Update authToken (at end of file) with the access token returned from the curl command

###  Start Cardstack
* Change directory back to contenta_cardstack root
* ``ember serve``

Visit your app at [http://localhost:4200](http://localhost:4200).

## Debugging Cardstack Hub

The @cardstack/hub server process runs inside ember-cli in development. To get much more debug out about what it's doing, set the environment variables:

    DEBUG=cardstack/*
    DEBUG_LEVEL=info (or debug or trace)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
