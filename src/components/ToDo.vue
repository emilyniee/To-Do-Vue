<script>
export default {
    props: {
        title: String,
        isCompleted: Boolean,
    }
}
</script>

<template>
    <div class ="to-do-list">
        <div class="to-do-item">
            <input 
                type="checkbox"
                :checked= "isCompleted"
                @input="$emit('complete-to-do')"
            />
            <h1 class="to-do-title"
                :class="{'compeleted-to-do' : isCompleted}">{{ title }}</h1>
        </div>
        <font-awesome-icon 
            icon="fa-solid fa-trash" 
            class="x-mark"
            @click="$emit('delete-to-do')"
        />
    </div>
</template>

<style lang="css" scoped>
    .to-do-list {
        margin: 16px;
        display: flex;
        flex-direction: row;
    }
    .to-do-item {
        display: flex;
        width: 100%;
        border-style: solid;
        border-color: var(--light-blue);
        border-radius: 16px;
        padding: 5px 16px;
    }
    .to-do-title {
       font-size: 16px;
       margin-left: 16px;
       overflow: hidden;
       text-overflow: ellipsis;

    }
    
    .x-mark {
        width: 16px;
        margin: auto 16px;
        color: var(--light-blue);
    }

    .x-mark:hover {
        color: var(--red);
    }

    .dot {
        margin: auto 0;
        height: 16px;
        min-width: 16px;
        background-color: white;
        border-radius: 50%;
        border-style: solid;
        border-color: var(--light-blue);
    }

    .compeleted-to-do {
        text-decoration: line-through;
    }

</style>