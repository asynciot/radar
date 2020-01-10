<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-key="1">
      <div class="layout-logo"></div>
      <div class="layout-nav">
        <MenuItem :key="1">
          <Icon type="ios-navigate"></Icon>
          雷达图
        </MenuItem>
      </div>
      <Content :style="{padding: '0 4px 4px',position:'relative',minHeight: '91vh'}" >
      	<div class="layout-content-main">
      		<transition name="fade">
      			<router-view></router-view>
      		</transition>
      	</div>
      </Content>
    </Menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    mounted() {
    },
    methods: {
    }
  }
</script>

<style>
</style>
