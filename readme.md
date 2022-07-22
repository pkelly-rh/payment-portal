# Payment Portal
## USAGE:

Run Server With hot module reloading.
```
npm start
```

Build:
```
npm run build
```

## Installing Packages

rh-mobile-frontend is the home of the packages. Once pushed to develop there is a jenkins task that publishes the packages to jFrog Artifactory. If you noticed the .npmrc file you will see that our artifactory url is in there. For example,  a package like `@rh-estore-ui/utils` is not public and without the following information in the .npmrc you wont be able to do `npm search @rh-estore-ui/utils` and `npm i @rh-estore-ui/utils`

```
registry = https://rhartifactory.jfrog.io/rhartifactory/api/npm/rhapsody-npm
_auth = dmd1bm5hbGE6QUtDcDVmVXNYd2VzdjNyVVBCWUd3aWNGOUxKMzc1OFJvUWZMem5MTG5NRlpRZkRldHZkQjJ5ZjZXQ3hYZzI1ck1Nbm5CMVNINw==
email = vgunnala@rh.com
always-auth = true
```
### Installing a package as an alias
https://www.nieknijland.nl/blog/use-multiple-versions-of-an-npm-package-at-the-same-time
```npm install <alias>@npm:<name>```

example:
```npm i utils@npm:@rh-estore-ui/utils```